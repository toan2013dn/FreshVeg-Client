import './productinfo.component.scss'
import { ReactComponent as AddToCart } from '@/assets/icons/AddToCart.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PriceWithDots from '../PriceWithDots/price-with-dots.component'
import productBackground from '@/assets/images/Product-Part-1.webp'
import TextOverflow from '../TextOverflow/text-overflow.component'

function ProductInfo({ product }) {
  const navigate = useNavigate()
  const handleNavigatge = () => {
    navigate(`/products-details/${product.productId}`)
  }
  return (
    <div className="product-info">
      <div className="product-info--image">
        <img
          src={product.productImage ? product.productImage : productBackground}
          alt="product"
          className="product-info--image"
          draggable={false}
        />
      </div>
      <div className="product-info--flex">
        <h4 className="product-info--name">
          <TextOverflow width={200} content={product.productName} fontWeight={400} />{' '}
        </h4>
        <h4 className="product-info--price">
          <PriceWithDots price={product.price} />
        </h4>
      </div>
      <button onClick={handleNavigatge}>Xem Thêm</button>
    </div>
  )
}

export default ProductInfo
