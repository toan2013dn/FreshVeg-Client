import Header from '@/components/Header/header.component'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Next } from '@/assets/icons/Next.svg'
import './products-details.styles.scss'
import Details from '@/components/Details/details.component'
import FilterPanel from '@/components/FilterPanel/filter-panel.component'
import Footer from '@/components/Footer/footer.component'

function ProductsDetails() {
  return (
    <div className="products-details">
      <div className="header-layout">
        <div>
          <Header />
        </div>
        <div className="line"></div>
      </div>
      <div className="container">
          <div className="products-details--links">
            <NavLink to="/">Trang chủ</NavLink>
            <Next />
            <NavLink to="/categories">Đi Chợ</NavLink>
            <Next />
            <NavLink to="/products-details">Rau củ quả</NavLink>
          </div>
        <div className="flex-content">
          <div>
            <div className="categories-filter">
              <FilterPanel />
            </div>
          </div>
          <div className="products-details--content">
            <Details />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ProductsDetails
