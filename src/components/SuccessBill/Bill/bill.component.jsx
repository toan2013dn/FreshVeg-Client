import './bill.styles.scss'

import axios from '@/api/axios'

import { useSearchParams } from 'react-router-dom'
import { useTokenStore, useProductCartStore } from '@/store'
import { useEffect, useState } from 'react'

function Bill() {
  const [orderInfo, setOrderInfo] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [token] = useTokenStore((state) => [state.token])
  const [setProductCart] = useProductCartStore((state) => [state.setProductCart])
  useEffect(() => {
    setProductCart([])
  }, [])
  const formattedDate = () => {
    const date = new Date(orderInfo?.orderDate)
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear().toString()
    return `${day}/${month}/${year}`
  }

  let [searchParams, setSearchParams] = useSearchParams()

  const orderId = searchParams.get('orderId')

  useEffect(() => {
    axios
      .get(`/order/${orderId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      // .get(`/order/18`)
      .then((res) => {
        setOrderInfo(res.data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  if (isLoading) return null

  return (
    <div className="bill">
      <div className="bill-info">
        {orderInfo?.orderDetails.map((item) => (
          <div className="product-items flex">
            <div className="products ">
              <h4>{item.product.productName}</h4>
              <h4>{item.weight.toFixed(1)}kg</h4>
            </div>
            <h4>{(item?.price * item?.weight.toFixed(1) * 10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ</h4>
          </div>
        ))}
        <div className="shipping-cost flex">
          <h4>Phí Vận Chuyển</h4>
          <h4>0đ</h4>
        </div>
        <div className="total-cost flex">
          <h4>THANH TOÁN </h4>
          <h4>{orderInfo.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ</h4>
        </div>
      </div>

      <div className="bill-details">
        <h4 style={{ fontWeight: '700' }}>CHI TIẾT</h4>
        <div className="bill-details--orderDate flex">
          <h4 style={{ width: '70%' }}>Ngày đặt hàng:</h4>
          <h4 style={{ width: '100%' }}>{formattedDate()}</h4>
        </div>
        <div className="bill-details--receiverName flex">
          <h4 style={{ width: '70%' }}>Tên người nhận:</h4>
          <h4 style={{ width: '100%' }}>{orderInfo?.address?.receiverName}</h4>
        </div>
        <div className="bill-details--address flex">
          <h4 style={{ width: '70%' }}>Địa chỉ giao hàng:</h4>
          <h4 style={{ width: '100%', lineHeight: '1.5' }}>{orderInfo?.address?.address}</h4>
        </div>
        <div className="bill-details--phone flex">
          <h4 style={{ width: '70%' }}>SĐT người nhận:</h4>
          <h4 style={{ width: '100%' }}>{orderInfo?.address?.receiverPhone}</h4>
        </div>
        <div className="bill-details--note">
          {orderInfo.note !== null ? (
            <>
              <h4 style={{ fontWeight: '700' }}>GHI CHÚ</h4>
              <h4 style={{ textAlign: 'left', marginTop: '20px' }}>{orderInfo.note}</h4>
            </>
          ) : (
            <>
              <h4 style={{ fontWeight: '700' }}>GHI CHÚ</h4>
              <h4 style={{ textAlign: 'left', marginTop: '20px' }}>Không có</h4>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Bill
