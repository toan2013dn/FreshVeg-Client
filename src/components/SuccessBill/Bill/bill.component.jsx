import './bill.styles.scss'

import { useProductCartStore } from '@/store'
import { useOrderInfoStore } from '@/store'

import PriceWithDots from '@/components/PriceWithDots/price-with-dots.component'
import useTotalPrice from '@/hooks/useTotalPrice'

function Bill() {
  const [productCart] = useProductCartStore((state) => [state.productCart])
  const [selectedAddress, orderNote, orderDate, setOrderDate] = useOrderInfoStore((state) => [
    state.selectedAddress,
    state.orderNote,
    state.orderDate,
    state.setOrderDate,
  ])

  const { totalPrice } = useTotalPrice()

  return (
    <div className="bill">
      <div className="bill-info">
        {productCart.map((product) => (
          <div className="product-items flex" key={product.productId}>
            <div className="products ">
              <h4>{product.productName}</h4>
              <h4>{product.weight}gr</h4>
            </div>
            <h4>{(product?.price * product?.weight).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ</h4>
          </div>
        ))}
        <div className="shipping-cost flex">
          <h4>Phí Vận Chuyển</h4>
          <h4>0đ</h4>
        </div>
        <div className="total-cost flex">
          <h4>THANH TOÁN </h4>
          <h4>
            <PriceWithDots price={totalPrice} />{' '}
          </h4>
        </div>
      </div>

      <div className="bill-details">
        <h4 style={{ fontWeight: '700' }}>CHI TIẾT</h4>
        {orderDate && (
          <div className="bill-details--orderDate flex">
            <h4 style={{ width: '70%' }}>Ngày đặt hàng:</h4>
            <h4 style={{ width: '100%' }}>{orderDate.toLocaleDateString()}</h4>
          </div>
        )}
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
