import axios from '@/api/axios'
import { createContext, useContext, useEffect, useRef, useState } from 'react'

const ProductsContext = createContext(undefined)

export const ProductProvider = ({ children }) => {
  const initialProducts = useRef([])
  const [products, setProducts] = useState([])
  const [filterFuncs, setFilterFuncs] = useState({})
  const [sortFunc, setSortFunc] = useState(() => () => {})

  console.log('sortFunc', sortFunc)

  useEffect(() => {
    let updateProducts = initialProducts.current

    console.log('sort: ', sortFunc, ' ', updateProducts)
    if (sortFunc) updateProducts = updateProducts.sort(sortFunc)

    Object.keys(filterFuncs).forEach((key) => {
      if (filterFuncs[key]) updateProducts = updateProducts.filter(filterFuncs[key])
    })

    setProducts(updateProducts)
  }, [initialProducts.current, filterFuncs, sortFunc])

  const setProductFilterFuncs = (type, func) => {
    console.log(type, func)

    filterFuncs[type] = func

    setFilterFuncs({ ...filterFuncs })
  }

  console.log(products)
  console.log(filterFuncs)

  useEffect(() => {
    axios
      .get('/product/all')
      .then((response) => {
        initialProducts.current = response.data
        setProducts(initialProducts.current)
      })
      .catch((err) => {
        console.log('products err', err)
      })
  }, [])

  return (
    <ProductsContext.Provider
      value={{ products, setProducts, setFilters: setProductFilterFuncs, setSort: setSortFunc }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductsContext = () => {
  const context = useContext(ProductsContext)

  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider')
  }

  return context
}
