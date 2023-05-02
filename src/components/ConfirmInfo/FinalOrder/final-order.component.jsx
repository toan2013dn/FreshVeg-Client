import './final-order.styles.scss'

import {
  useBillInfoStore,
  useOrderInfoStore,
  useProductCartStore,
  useTokenStore,
  useUserAddressesStore,
  useUserStore,
} from '@/store'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

import axios from '@/api/axios'
import Decoration from '@/assets/images/Decoration.webp'
import useTotalPrice from '@/hooks/useTotalPrice'

function FinalOrder({ orderNote }) {
  const [selectedAddress, selectedPaymentMethod, setSelectedPaymentMethod] = useOrderInfoStore((state) => [
    state.selectedAddress,
    state.selectedPaymentMethod,
    state.setSelectedPaymentMethod,
  ])
  const [user] = useUserStore((state) => [state.userInfo])
  const [token] = useTokenStore((state) => [state.token])
  const [productCart, setProductCart] = useProductCartStore((state) => [state.productCart, state.setProductCart])
  const [setBillInfo] = useBillInfoStore((state) => [state.setBillInfo])
  const [userAddresses] = useUserAddressesStore((state) => [state.userAddresses])
  const [setOrderDate, setOrderInfo] = useOrderInfoStore((state) => [state.setOrderDate, state.setOrderInfo])
  const { totalPrice } = useTotalPrice()

  const navigate = useNavigate()

  const handleClickToOrderSuccess = () => {
    if (userAddresses.length === 0) {
      toast.error('Vui lòng thêm địa chỉ giao hàng')
      return
    } else if (productCart.length === 0) {
      toast.error('Vui lòng thêm sản phẩm vào giỏ hàng')
      return
    }

    const updatedProductCart = productCart.map((product) => {
      return {
        product: { productId: product.product.productId },
        price: product.price,
        weight: product.weight,
        productName: product.productName,
      }
    })

    axios
      .post(
        '/orderUser/add',
        {
          // userId: user?.userId,
          phone: selectedAddress?.receiverPhone,
          amount: Math.ceil(totalPrice) * 1000,
          note: orderNote,
          // date: orderDate,
          address: {
            addressId: selectedAddress?.addressId,
          },
          orderDetails: updatedProductCart,
          user: {
            userId: user?.userId,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        },
      )
      .then((res) => {
        setBillInfo(productCart)
        setOrderInfo(res.data)
        const currentDate = new Date()
        setOrderDate(currentDate)

        if (selectedPaymentMethod === 2) {
          setSelectedPaymentMethod(1)
          axios
            .post(
              `/checkout/create-payment`,
              {
                orderId: res.data?.orderId,
                amount: res.data?.amount,
                bankCode: 'NCB',
              },
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                  'Content-Type': 'application/json',
                },
              },
            )
            .then((res) => {
              setBillInfo(productCart)
              setProductCart([])
              window.location.href = res.data.url
            })
            .catch((err) => {
              console.log(err)
            })
        } else {
          const currentDate = new Date()
          setOrderDate(currentDate)
          // let params = { orderId: orderInfo.orderId }
          let params = { orderId: res.data?.orderId }
          navigate({ pathname: '/order-success', search: `?${createSearchParams(params)}` })
          setTimeout(() => {
            setProductCart([])
          }, 1500)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <div className="final-order">
        <div className="final-order--title">
          <h4>Đơn Hàng Của Bạn</h4>
        </div>
        <div className="final-order--details">
          <div className="title flex">
            <h4>Sản Phẩm</h4>
            <h4>Thành Tiền</h4>
          </div>
          {productCart.map((product) => (
            <div className="product-items flex" key={product.productId}>
              <div className="products">
                <h4>{product.productName}</h4>
                <h4>{product.weight.toFixed(1)}kg</h4>
              </div>
              <h4>
                {(product?.price * product?.weight.toFixed(1) * 10)
                  .toFixed(0)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                đ
              </h4>
            </div>
          ))}
          <div className="shipping-cost flex">
            <h4>Phí Vận Chuyển</h4>
            <h4>0đ</h4>
          </div>
          <div className="total-cost flex">
            <h4>Thanh Toán</h4>
            <h4>
              {/* <PriceWithDots price={totalPrice} /> */}
              {(totalPrice.toFixed(3) * 1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ
            </h4>
          </div>
        </div>
        <button className="home-products--button" style={{ fontSize: '20px' }} onClick={handleClickToOrderSuccess}>
          Đặt Hàng
        </button>
      </div>
      <div className="order-confirm--image">
        <img src={Decoration} alt="decoration" />
      </div>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default FinalOrder
