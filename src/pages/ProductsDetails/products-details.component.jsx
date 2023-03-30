import './products-details.styles.scss'

import Header from '@/components/Header/header.component'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Next } from '@/assets/icons/Next.svg'
import { useState, useEffect } from 'react'
import { useProductStore } from '@/store'
import axios from '@/api/axios'
import { useParams } from 'react-router-dom'
import Details from '@/components/Details/details.component'
import FilterPanel from '@/components/FilterPanel/filter-panel.component'
import Footer from '@/components/Footer/footer.component'

function ProductsDetails() {
  let { productId } = useParams()
  return (
    <div className="products-details">
      <Header />
      <div className="container">
        <div className="products-details--links">
          <NavLink to="/">Trang chủ</NavLink>
          <Next />
          <NavLink to="/categories">Đi Chợ</NavLink>
          <Next />
          <NavLink to="/products-details">Rau củ quả</NavLink>
        </div>
        <Details productId={productId} />
      </div>
      <Footer />
    </div>
  )
}

export default ProductsDetails
