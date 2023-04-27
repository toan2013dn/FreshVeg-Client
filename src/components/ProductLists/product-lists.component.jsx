import './product-lists.styles.scss'

import { isEmpty } from 'lodash'
import { useEffect, useState } from 'react'

import { useSearchParams } from 'react-router-dom'
import { useSearch } from '../../context/header.context'
import { useProductsContext } from '../../context/products-list.context'
import ProductInfo from '../ProductInfo/productinfo.component'
import PaginationComponent from './Pagination/pagination.component'
import Sort from './Sort/sort.component'

function ProductLists() {
  const [searchParams] = useSearchParams()
  const [currentPage, setCurrentPage] = useState(1)
  const search = searchParams.get('search')
  const { products, setFilters } = useProductsContext()
  const { searchValue, setSearchValue } = useSearch()
  const productsPerPage = 9

  useEffect(() => {
    if (!isEmpty(search)) {
      setSearchValue(search)
    }
  }, [search])

  useEffect(() => {
    if (searchValue)
      setFilters('search', (product) => {
        return searchValue ? product.productName.toLowerCase().includes(searchValue.toLowerCase()) : true
      })
    else setFilters('search', undefined)
  }, [searchValue])

  const handlePageChange = (event, page) => {
    setCurrentPage(page)
  }

  const startIndex = (currentPage - 1) * productsPerPage
  const endIndex = startIndex + productsPerPage
  const currentProducts = products.slice(startIndex, endIndex)

  return (
    <div className="product-lists">
      <Sort />

      <div className="product-lists--info">
        {currentProducts.map((product) => {
          return <ProductInfo key={product.productId} product={product} />
        })}
      </div>

      <div className="product-lists--pagination">
        <PaginationComponent
          currentPage={currentPage}
          productsPerPage={productsPerPage}
          totalProducts={products.length}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  )
}

export default ProductLists
