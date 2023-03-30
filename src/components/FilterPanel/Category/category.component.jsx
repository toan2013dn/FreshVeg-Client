import './category.component.scss'
import { useEffect, useState } from 'react'
import axios from '@/api/axios'

function Category() {
  const [categories, setCategories] = useState([
    // {
    //   id: 1,
    //   name: "Rau",
    // },
    // {
    //   id: 2,
    //   name: "Củ",
    // },
    // {
    //   id: 3,
    //   name: "Quả",
    // },
  ])

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

  const [selectedCategory, setSelectedCategory] = useState([])

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
            onChange={() => setSelectedCategory(category.categoryId)}
          />
        </div>
      ))}
    </div>
  )
}

export default Category
