import './final-order.styles.scss'

import { Link } from 'react-router-dom'
import { useProductCartStore } from '@/store'
import PriceWithDots from '@/components/PriceWithDots/price-with-dots.component'

function FinalOrder() {
  const [productCart, setProductCart] = useProductCartStore((state) => [state.productCart, state.setProductCart])
  console.log(productCart)
  return (
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
          <div className="product-items flex">
            <div className="products">
              <h4>{product.productName}</h4>
              <h4>100gr</h4>
            </div>
            <h4>
              <PriceWithDots price={product.price} />
            </h4>
          </div>
        ))}
        <div className="shipping-cost flex">
          <h4>Phí Vận Chuyển</h4>
          <h4>
            <PriceWithDots price={50000} />
          </h4>
        </div>
        <div className="total-cost flex">
          <h4>Thanh Toán</h4>
          <h4>
            <PriceWithDots price={50000} />
          </h4>
        </div>
        {/* <div className="final-order--details-right">
          <h4 style={{ fontWeight: '700' }}>Thành Tiền</h4>
        </div> */}
      </div>
      <button className="home-products--button">
        <Link to={''} style={{ fontSize: '22px' }}>
          Đặt Hàng
        </Link>
      </button>
    </div>
  )
}

export default FinalOrder
