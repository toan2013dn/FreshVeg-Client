import './products.page.scss'

import { ReactComponent as Next } from '@/assets/icons/Next.svg'
import { NavLink, useSearchParams } from 'react-router-dom'

import Header from '@/components/Header/header.component'
import ProductsBG from '@/assets/images/CategoriesBG.webp'
import Footer from '@/components/Footer/footer.component'
import FilterPanel from '@/components/FilterPanel/filter-panel.component'
import ProductLists from '@/components/ProductLists/product-lists.component'
import React from 'react'
import { ProductProvider } from '@/context/products-list.context'

function Products() {
  return (
    <div className="products">
      <Header />

      <div className="products-background">
        <div className="products-background--image">
          <img src={ProductsBG} alt="Products Background" />
        </div>
        <div className="products-background--content">
          <h3>Đi Chợ</h3>
          <h4>Rau, củ, quả sạch đến từ các nông trại</h4>
        </div>
      </div>
      <div className="container" style={{ marginBottom: '180px' }}>
        <ProductProvider>
          <div>
            <div className="products-links">
              <NavLink to="/">Trang chủ</NavLink>
              <Next />
              <NavLink to="/products">Đi Chợ</NavLink>
            </div>
            <div className="products-filter">
              <FilterPanel />
            </div>
          </div>
          <div className="products-list">
            <ProductLists />
          </div>
        </ProductProvider>
      </div>
      <Footer />
    </div>
  )
}

export default Products
