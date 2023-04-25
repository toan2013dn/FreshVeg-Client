import './product-lists.styles.scss'

import axios from '@/api/axios'
import { useState, useEffect } from 'react'
import { useProductStore } from '@/store'

import ProductInfo from '../ProductInfo/productinfo.component'
import Products from '@/assets/images/Products.webp'
import Sort from './Sort/sort.component'
import PaginationComponent from './Pagination/pagination.component'
import { useSearchParams } from 'react-router-dom'
import { useProductsContext } from './products-list.context'

function ProductLists() {
  const [searchParams] = useSearchParams()
  const search = searchParams.get('search')
  const { products, setProducts, filterProducts } = useProductsContext()

  useEffect(() => {
    filterProducts((product) => {
      return search ? product.productName.toLowerCase().includes(search.toLowerCase()) : true
    })
  }, [search])

  return (
    <div className="product-lists">
      <Sort />

      <div className="product-lists--info">
        {products.map((product) => {
          return <ProductInfo key={product.productId} product={product} />
        })}
      </div>

      <div className="product-lists--pagination">
        <PaginationComponent />
      </div>
    </div>
  )
}

export default ProductLists
