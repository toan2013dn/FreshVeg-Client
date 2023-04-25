import './category.component.scss'

import { useEffect, useState } from 'react'
import { useProductStore } from '@/store'

import axios from '@/api/axios'

function Category() {
  const [categories, setCategories] = useState([])
  const [selectedCategories, setSelectedCategory] = useState([])
  const { products, filterProducts } = useProductsContext()

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
    console.log(products, categories, selectedCategories)

    if (selectedCategories.length !== 0) {
      filterProducts((product) => {
        return selectedCategories.map(selected => selected.categoryId).includes(product.categoryId)
      }
    }
  }, [selectedCategories])

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
            value={category.categoryName}
            onChange={() => setSelectedCategory([...selectedCategories, category.categoryId])}
          />
        </div>
      ))}
    </div>
  )
}

export default Category
