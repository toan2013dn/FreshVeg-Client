import './product-image.styles.scss'

import Products from '@/assets/images/Products.webp'
import { useState } from "react";
import ProductOne from '@/assets/images/Product-Part-1.webp'
import ProductTwo from '@/assets/images/Product-Part-2.webp'
import ProductThree from '@/assets/images/Product-Part-3.webp'

function ProductImage() {
  const images = [
    {
      id: 1,
      image: Products,
    },
    {
      id: 2,
      image: ProductOne,
    },
    {
      id: 3,
      image: ProductTwo,
    },
    {
      id: 4,
      image: ProductThree,
    },

  ]
  const [selectedImage, setSelectedImage] = useState(images[0].image)

  const handleClick = (id) => {
    const image = images.find((image) => image.id === id)
    setSelectedImage(image.image)
  }

  return (
    <div className="product-image">
      <div className='product-image--preview'>
        <img className="image" src={selectedImage} alt="product" />
      </div>
      <ul className="product-image--list">
        {images.map((image) => (
          <li key={image.id} onClick={() => handleClick(image.id)}>
            <img className="image" src={image.image} alt="product"  />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductImage
