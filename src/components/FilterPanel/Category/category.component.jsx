import './category.component.scss'

import { useEffect, useState } from 'react'
import { useProductsContext } from '../../../context/products-list.context'

import axios from '@/api/axios'

function Category() {
  const [categories, setCategories] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])
  const { products, setFilters } = useProductsContext()

  useEffect(() => {
    axios
      .get('/category/all')
      .then((response) => {
        setCategories(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilters('category', undefined)
    } else {
      setFilters('category', (product) => {
        return selectedCategories.includes(product.category.categoryId)
      })
    }
  }, [selectedCategories])

  const hanldeCategoryFilterChange = (e) => {
    const value = Number(e.target.value)
    if (e.target.checked) {
      setSelectedCategories([...selectedCategories, value])
    } else {
      selectedCategories.splice(selectedCategories.indexOf(value), 1)
      setSelectedCategories([...selectedCategories])
    }
  }

  return (
    <div className="category">
      <h4>Loại</h4>
      {categories.map((category) => (
        <div className="category--item" key={category.categoryId}>
          <label htmlFor={category.categoryId}>{category.categoryName}</label>
          <input
            type="checkbox"
            id={category.categoryId}
            name={category.categoryName}
            value={category.categoryId}
            onChange={hanldeCategoryFilterChange}
          />
        </div>
      ))}
    </div>
  )
}

export default Category
