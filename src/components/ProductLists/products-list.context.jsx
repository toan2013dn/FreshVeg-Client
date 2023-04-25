import { useRef, useState, useEffect, useContext, createContext } from 'react'
import axios from '@/api/axios'

const ProductsContext = createContext(undefined)

export const ProductProvider = ({ children }) => {
  const initialProducts = useRef([])
  const [products, setProducts] = useState([])

  const refreshProducts = () => {
    setProducts(initialProducts.current)
  }

  const filterProducts = (filterFunc) => {
    setProducts(initialProducts.current.filter(filterFunc))
  }

  useEffect(() => {
    axios
      .get('/product/all')
      .then((response) => {
        initialProducts.current = response.data.filter((product) => {
          return product
        })
        setProducts(initialProducts.current)
      })
      .catch((err) => {
        console.log('products err', err)
      })
  }, [])

  return (
    <ProductsContext.Provider value={{ products, setProducts, refreshProducts, filterProducts }}>
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
