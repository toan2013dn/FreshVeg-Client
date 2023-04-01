import './categories.page.scss'
import { ReactComponent as Next } from '@/assets/icons/Next.svg'
import Header from '@/components/Header/header.component'
import CategoriesBG from '@/assets/images/CategoriesBG.webp'
import Footer from '@/components/Footer/footer.component'
import FilterPanel from '@/components/FilterPanel/filter-panel.component'
import ProductLists from '@/components/ProductLists/product-lists.component'
import { NavLink } from 'react-router-dom'
import React from 'react'

function Categories() {
  return (
    <div className="categories">
      <Header />

      <div className="categories-background">
        <img src={CategoriesBG} alt="Categories Background" />
        <div className="categories-background--content">
          <h3>Đi Chợ</h3>
          <h4>Rau, củ, quả sạch đến từ các nông trại</h4>
        </div>
      </div>
      <div className="container">
        <div>
          <div className="categories-links">
            <NavLink to="/">Trang chủ</NavLink>
            <Next />
            <NavLink to="/categories">Đi Chợ</NavLink>
          </div>
          <div className="categories-filter">
            <FilterPanel />
          </div>
        </div>
        <div className="categories-list">
          <ProductLists />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Categories
