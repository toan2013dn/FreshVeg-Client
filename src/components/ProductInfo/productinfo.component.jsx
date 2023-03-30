import './productinfo.component.scss'
import { ReactComponent as AddToCart } from '@/assets/icons/AddToCart.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PriceWithDots from '../PriceWithDots/price-with-dots.component'
import productBackground from '@/assets/images/Recipe.webp'

function ProductInfo({ product }) {
  const navigate = useNavigate()
  const handleNavigatge = () => {
    navigate(`/products-details/${product.productId}`)
  }
  return (
    <div className="product-info" onClick={handleNavigatge}>
      <div className="product-info--image">
        <img
          src={product.productImage ? product.productImage : productBackground}
          alt="product"
          className="product-info--image"
          draggable={false}
        />
      </div>
      <div className="product-info--flex">
        <div>
          <h4 className="product-info--name">{product.productName}</h4>
          <h4 className="product-info--price">
            <PriceWithDots price={product.price} />
          </h4>
        </div>
        <AddToCart className="product-info--button" />
      </div>
    </div>
  )
}

export default ProductInfo
