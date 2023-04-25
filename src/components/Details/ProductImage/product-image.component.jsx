import './product-image.styles.scss'

import { useState } from 'react'

function ProductImage({ content }) {
  const productImages = content?.productImages

  const [selectedImage, setSelectedImage] = useState(productImages[0].imageLink)
  const [activeImage, setActiveImage] = useState(productImages[0].productImageId)

  const isThumbnailActive = (id) => {
    return activeImage === id ? 'active' : ''
  }

  const handleClick = (id) => {
    const image = productImages.find((image) => image?.productImageId === id)
    setSelectedImage(image.imageLink)
    setActiveImage(id)
  }

  return (
    <div className="product-image">
      <div className="product-image--preview">
        <img className="image" src={selectedImage} alt="product" />
      </div>
      <ul className="product-image--list">
        {productImages.map((image) => (
          <li
            className={isThumbnailActive(image?.productImageId)}
            key={image?.productImageId}
            onClick={() => handleClick(image?.productImageId)}
          >
            <img className="image" src={image?.imageLink} alt="product" />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductImage
