import './homeproducts.component.scss'

import { useNavigate } from 'react-router-dom'
import ProductInfo from '../ProductInfo/productinfo.component'
import Products from '@/assets/images/Products.webp'

function HomeProducts() {
  const productLists = [
    {
      id: 1,
      image: Products,
      name: 'Hạt chi đó',
      price: 50000,
    },
    {
      id: 2,
      image: Products,
      name: 'Hạt chi đó',
      price: 50000,
    },
    {
      id: 3,
      image: Products,
      name: 'Hạt chi đó',
      price: 50000,
    },
    {
      id: 4,
      image: Products,
      name: 'Hạt chi đó',
      price: 50000,
    },
    {
      id: 5,
      image: Products,
      name: 'Hạt chi đó',
      price: 50000,
    },
    {
      id: 6,
      image: Products,
      name: 'Hạt chi đó',
      price: 50000,
    },
    {
      id: 7,
      image: Products,
      name: 'Hạt chi đó',
      price: 50000,
    },
    {
      id: 8,
      image: Products,
      name: 'Hạt chi đó',
      price: 50000,
    },
  ]

  const navigate = useNavigate()

  const handleProductClick = () => {
    navigate('/categories')
  }

  return (
    <div className="home-products container">
      <div className="introduction">
        <h2 className="home-products--line"></h2>
        <h2 className="home-products--title">Sản Phẩm Nổi Bật</h2>
        <h4 className="home-products--text">Đây là các sản phẩm được xem và mua nhiều nhất trong tuần vừa qua</h4>
      </div>

      <div className="product">
        {productLists.map((product) => {
          return <ProductInfo key={product.id} product={product} />
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
