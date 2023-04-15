import './final-order.styles.scss'

import { useProductCartStore, useUserAddressesStore, useOrderInfoStore, useUserStore, useBillInfoStore } from '@/store'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

import React from 'react'
import axios from '@/api/axios'
import useTotalPrice from '@/hooks/useTotalPrice'
import PriceWithDots from '@/components/PriceWithDots/price-with-dots.component'
import Decoration from '@/assets/images/Decoration.webp'
import { useEffect } from 'react'

function FinalOrder() {
  const [selectedAddress, orderNote, orderDate, orderTotal, orderInfo] = useOrderInfoStore((state) => [
    state.selectedAddress,
    state.orderNote,
    state.orderDate,
    state.orderTotal,
    state.orderInfo,
  ])
  const [user] = useUserStore((state) => [state.userInfo])
  const [productCart, setProductCart] = useProductCartStore((state) => [state.productCart, state.setProductCart])
  const [setBillInfo] = useBillInfoStore((state) => [state.setBillInfo])
  const [userAddresses] = useUserAddressesStore((state) => [state.userAddresses])
  const [setOrderDate, setOrderInfo] = useOrderInfoStore((state) => [state.setOrderDate, state.setOrderInfo])
  const { totalPrice } = useTotalPrice()
  const navigate = useNavigate()
  useEffect(() => {
    setBillInfo(productCart)
  }, [productCart])

  const handleClickToOrderSuccess = () => {
    if (userAddresses.length === 0) {
      toast.error('Vui lòng thêm địa chỉ giao hàng')
      return
    } else if (productCart.length === 0) {
      toast.error('Vui lòng thêm sản phẩm vào giỏ hàng')
      return
    }

    axios
      .post('/order', {
        userId: user?.userId,
        phone: selectedAddress?.receiverPhone,
        amount: totalPrice,
        note: orderNote,
        // date: orderDate,
        address: {
          addressId: selectedAddress?.addressId,
        },
        orderDetails: productCart,
      })
      .then((res) => {
        setOrderInfo(res.data)
      })
      .catch((err) => {
        console.log(err)
      })

    const currentDate = new Date()
    setOrderDate(currentDate)
    navigate('/order-success')

    setProductCart([])
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
                <h4>{product.weight}gr</h4>
              </div>
              <h4>{((product?.price * product?.weight) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ</h4>
            </div>
          ))}
          <div className="shipping-cost flex">
            <h4>Phí Vận Chuyển</h4>
            <h4>
              <PriceWithDots price={0} />
            </h4>
          </div>
          <div className="total-cost flex">
            <h4>Thanh Toán</h4>
            <h4>
              <PriceWithDots price={totalPrice} />
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
