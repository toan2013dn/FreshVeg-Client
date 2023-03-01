import "./category.component.scss";
import { useState } from "react";

function Category() {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Rau",
    },
    {
      id: 2,
      name: "Củ",
    },
    {
      id: 3,
      name: "Quả",
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState([]);

  return (
    <div className="category">
      <h4>Loại</h4>
      {categories.map((category) => (
          <div className="category--item" key={category.id}>
            <label htmlFor={category.id}>{category.name}</label>
            <input
              type="checkbox"
              id={category.id}
              name={category.name}
              value={category.name}
            />
          </div>
      ))}
    </div>
  );
}

export default Category;
