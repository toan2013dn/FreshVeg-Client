import './user-order-info.styles.scss'

import { useState, useEffect } from 'react'
import { useTokenStore } from '@/store'

import axios from '@/api/axios'
import PriceWithDots from '@/components/PriceWithDots/price-with-dots.component'
import TextOverflow from '@/components/TextOverflow/text-overflow.component'
import AirplanemodeActiveOutlinedIcon from '@mui/icons-material/AirplanemodeActiveOutlined'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined'
import Modal from '@mui/material/Modal'

function UserOrderInfo({ isOpen, orderId, orderDate, onClose, orderNote, orderTotal, orderStatusPayment }) {
  const [products, setProducts] = useState([])
  const [token] = useTokenStore((state) => [state.token])
  const [displayCount, setDisplayCount] = useState(3) // default display count

  const handleShowMore = () => {
    if (displayCount <= 3) {
      setDisplayCount(products.length)
    } else {
      setDisplayCount(displayCount + 4)
    }
  }

  const handleShowLess = () => {
    setDisplayCount(3)
  }
  useEffect(() => {
    axios
      .get(`/order/${orderId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        // setProducts(res.data.orderDetails)

        res.data.orderDetails.forEach((orderDetail) => {
          const result = {
            id: orderDetail.product.productId,
            price: orderDetail.price,
            weight: orderDetail.weight,
            name: orderDetail.product.productName,
            image: orderDetail.product.productImages[0].imageLink,
          }

          setProducts((prev) => [...prev, result])
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const dateGetter = () => {
    const date = new Date(orderDate)
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  }

  const estimatedDeliveryDate = new Date()
  estimatedDeliveryDate.setDate(estimatedDeliveryDate.getDate() + 2) // set estimated delivery date as 2 days from now

  const estimatedDeliveryDateGetter = () => {
    const date = estimatedDeliveryDate
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  }

  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className="user-order-info">
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div className="order-date">
            <p>Ngày đặt hàng: {dateGetter()}</p>
          </div>
          <div className="estimate-delivery">
            <AirplanemodeActiveOutlinedIcon />
            <p>Ngày dự kiến giao hàng: {estimatedDeliveryDateGetter()}</p>
          </div>
        </div>
        <div className={products.length > 3 ? 'scroll-container' : ''}>
          {products.slice(0, displayCount).map((product) => (
            <div className="user-order-info__product" key={product.id}>
              <div className="image">
                <img src={product.image} alt="" />
              </div>
              <div className="info">
                <div className="name">
                  <TextOverflow width={300} fontWeight={700} content={product.name} />
                </div>
                <div className="price">
                  <PriceWithDots price={product.price} fontWeight={700} />
                </div>
                <div className="weight">{product.weight.toFixed(1)}kg</div>
              </div>
            </div>
          ))}
          {products.length > 3 && (
            <div className="show-more-less">
              {displayCount === 3 ? (
                <button onClick={handleShowMore}>
                  Xem thêm <KeyboardArrowDownOutlinedIcon />
                </button>
              ) : (
                <button onClick={handleShowLess}>
                  Thu gọn
                  <KeyboardArrowUpOutlinedIcon />
                </button>
              )}
            </div>
          )}
        </div>
        <div className="order-note">
          {orderNote !== null ? (
            <>
              <div className="order-note__title">Ghi chú đơn hàng: </div>
              <div className="order-note__content">{orderNote} </div>
            </>
          ) : (
            <>
              <div className="order-note__title">Ghi chú đơn hàng: </div>
              <div className="order-note__content">Không có</div>
            </>
          )}
        </div>
        <div className="payment-status">
          <div className="payment-status__title">Trạng thái thanh toán: </div>
          <div className="payment-status__content">
            {orderStatusPayment ? 'Đã thanh toán bằng VNPAY' : 'Thanh toán khi nhận hàng (COD)'}
          </div>
        </div>
        <div className="price-details">
          <div className="sub-total__title" style={{ fontSize: '18px', fontWeight: '700' }}>
            Tổng cộng:
          </div>
          <div className="sub-total__price" style={{ fontWeight: '700', color: 'var(--primary-color)' }}>
            {orderTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default UserOrderInfo
