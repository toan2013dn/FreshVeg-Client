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
  // const productLists = [
  //   {
  //     id: 1,
  //     image: Products,
  //     name: 'Hạt chi đó',
  //     price: 50000,
  //   },
  //   {
  //     id: 2,
  //     image: Products,
  //     name: 'Hạt chi đó',
  //     price: 50000,
  //   },
  //   {
  //     id: 3,
  //     image: Products,
  //     name: 'Hạt chi đó',
  //     price: 50000,
  //   },
  //   {
  //     id: 4,
  //     image: Products,
  //     name: 'Hạt chi đó',
  //     price: 50000,
  //   },
  //   {
  //     id: 5,
  //     image: Products,
  //     name: 'Hạt chi đó',
  //     price: 50000,
  //   },
  //   {
  //     id: 6,
  //     image: Products,
  //     name: 'Hạt chi đó',
  //     price: 50000,
  //   },
  //   {
  //     id: 7,
  //     image: Products,
  //     name: 'Hạt chi đó',
  //     price: 50000,
  //   },
  //   {
  //     id: 8,
  //     image: Products,
  //     name: 'Hạt chi đó',
  //     price: 50000,
  //   },
  //   {
  //     id: 9,
  //     image: Products,
  //     name: 'Hạt chi đó',
  //     price: 50000,
  //   },
  // ]

  const [products, setProducts] = useProductStore((state) => [state.products, state.setProducts])
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search')

  useEffect(() => {
    axios
    .get('/product/all')
    .then((response) => {
      const products = response.data.filter(product => {
        return product.productName.toLowerCase().includes(search.toLowerCase())
      })
      setProducts(products);
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
