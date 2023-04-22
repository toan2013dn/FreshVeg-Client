import './product-lists.styles.scss'

import axios from '@/api/axios'
import { useState, useEffect } from 'react'
import { useProductStore } from '@/store'

import ProductInfo from '../ProductInfo/productinfo.component'
import Products from '@/assets/images/Products.webp'
import Sort from './Sort/sort.component'
import PaginationComponent from './Pagination/pagination.component'
import { useSearchParams } from 'react-router-dom'

function ProductLists() {
  const [products, setProducts] = useProductStore((state) => [state.products, state.setProducts])
  const [searchParams] = useSearchParams()
  const search = searchParams.get('search')

  useEffect(() => {
    axios
      .get('/product/all')
      .then((response) => {
        const products = response.data.filter((product) => {
          return search ? product.productName.toLowerCase().includes(search.toLowerCase()) : true
        })
        setProducts(products)
      })
      .catch((err) => {
        console.log('products err', err)
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
