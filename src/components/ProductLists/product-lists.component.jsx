import './product-lists.styles.scss'

import { isEmpty } from 'lodash'
import { useEffect } from 'react'

import { useSearchParams } from 'react-router-dom'
import { useSearch } from '../../context/header.context'
import { useProductsContext } from '../../context/products-list.context'
import ProductInfo from '../ProductInfo/productinfo.component'
import PaginationComponent from './Pagination/pagination.component'
import Sort from './Sort/sort.component'

function ProductLists() {
  const [searchParams] = useSearchParams()
  const search = searchParams.get('search')
  const { products, setFilters } = useProductsContext()
  const { searchValue, setSearchValue } = useSearch()

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
