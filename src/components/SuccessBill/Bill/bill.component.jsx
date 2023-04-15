import './bill.styles.scss'

import { useBillInfoStore, useOrderInfoStore } from '@/store'

import PriceWithDots from '@/components/PriceWithDots/price-with-dots.component'

function Bill() {
  const [selectedAddress, orderNote, orderDate, orderTotal, orderInfo] = useOrderInfoStore((state) => [
    state.selectedAddress,
    state.orderNote,
    state.orderDate,
    state.orderTotal,
    state.orderInfo,
  ])
  const dateObj = new Date(orderDate)
  const day = dateObj.getUTCDate().toString().padStart(2, '0')
  const month = (dateObj.getUTCMonth() + 1).toString().padStart(2, '0')
  const year = dateObj.getUTCFullYear().toString()

  const [billInfo] = useBillInfoStore((state) => [state.billInfo])

  return (
    <div className="bill">
      <div className="bill-info">
        {billInfo.map((product) => (
          <div className="product-items flex" key={product.productId}>
            <div className="products ">
              <h4>{product.productName}</h4>
              <h4>{product.weight}gr</h4>
            </div>
            <h4>{((product?.price * product?.weight) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ</h4>
          </div>
        ))}
        <div className="shipping-cost flex">
          <h4>Phí Vận Chuyển</h4>
          <h4>0đ</h4>
        </div>
        <div className="total-cost flex">
          <h4>THANH TOÁN </h4>
          <h4>
            <PriceWithDots price={orderTotal} />
          </h4>
        </div>
      </div>

      <div className="bill-details">
        <h4 style={{ fontWeight: '700' }}>CHI TIẾT</h4>
        <div className="bill-details--orderDate flex">
          <h4 style={{ width: '70%' }}>Ngày đặt hàng:</h4>
          <h4 style={{ width: '100%' }}>{`${day}/${month}/${year}`}</h4>
        </div>
        <div className="bill-details--receiverName flex">
          <h4 style={{ width: '70%' }}>Tên người nhận:</h4>
          <h4 style={{ width: '100%' }}>{selectedAddress?.receiverName}</h4>
        </div>
        <div className="bill-details--address flex">
          <h4 style={{ width: '70%' }}>Địa chỉ giao hàng:</h4>
          <h4 style={{ width: '100%', lineHeight: '1.5' }}>{selectedAddress?.address}</h4>
        </div>
        <div className="bill-details--phone flex">
          <h4 style={{ width: '70%' }}>SĐT người nhận:</h4>
          <h4 style={{ width: '100%' }}>{selectedAddress?.receiverPhone}</h4>
        </div>
        {/* <div className="bill-details--statusPayment flex">
          <h4 style={{ width: '70%' }}>Phương thức thanh toán: </h4>
          {/* <h4 style={{ width: '100%' }}>{selectedAddress?.receiverPhone}</h4> 
          <h4>{!statusPaymentMethod ? 'Thanh toán khi nhận hàng (COD)' : 'Đã thanh toán bằng VNPAY'}</h4>
        </div> */}
        <div className="bill-details--note">
          {orderNote !== '' ? (
            <>
              <h4 style={{ fontWeight: '700' }}>GHI CHÚ</h4>
              <h4 style={{ textAlign: 'left', marginTop: '20px' }}>{orderNote}</h4>
            </>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Bill
