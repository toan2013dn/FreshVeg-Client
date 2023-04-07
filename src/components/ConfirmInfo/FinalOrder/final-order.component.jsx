import './final-order.styles.scss'

import { useProductCartStore } from '@/store'
import { useNavigate } from 'react-router-dom'

import useTotalPrice from '@/hooks/useTotalPrice'
import PriceWithDots from '@/components/PriceWithDots/price-with-dots.component'
import Decoration from '@/assets/images/Decoration.webp'

function FinalOrder() {
  const [productCart, setProductCart] = useProductCartStore((state) => [state.productCart, state.setProductCart])
  const { totalPrice } = useTotalPrice()

  const navigate = useNavigate()
  const handleClickToOrderSuccess = () => {
    navigate('/order-success')
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
    </>
  )
}

export default FinalOrder
