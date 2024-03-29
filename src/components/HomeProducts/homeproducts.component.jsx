import './homeproducts.component.scss'

import { useProductStore } from '@/store'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import axios from '@/api/axios'
import ProductInfo from '../ProductInfo/productinfo.component'

function HomeProducts() {
  const [products, setProducts] = useProductStore((state) => [state.products, state.setProducts])

  useEffect(() => {
    if (products.length === 0) {
      axios
        .get('/product/all')
        .then((response) => {
          setProducts(response.data)
        })
        .catch((err) => {
          console.log('products err', err)
        })
    }
  }, [])

  const navigate = useNavigate()

  const handleProductClick = () => {
    navigate('/products')
  }

  return (
    <div className="home-products container">
      <div className="introduction">
        <h2 className="home-products--line"></h2>
        <h2 className="home-products--title">Sản Phẩm Nổi Bật</h2>
        <h4 className="home-products--text">Đây là các sản phẩm được xem và mua nhiều nhất trong tuần vừa qua</h4>
      </div>

      <div className="product">
        {products.slice(0, 8).map((product) => {
          return <ProductInfo key={product.productId} product={product} />
        })}
      </div>

      <div className="button">
        <button className="home-products--button" onClick={handleProductClick}>
          <a>Xem Tất Cả</a>
        </button>
      </div>
    </div>
  )
}

export default HomeProducts
