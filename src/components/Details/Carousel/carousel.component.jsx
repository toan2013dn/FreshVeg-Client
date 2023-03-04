import './carousel.styles.scss'

import Products from '@/assets/images/Products.webp'
import ProductOne from '@/assets/images/Product-Part-1.webp'
import ProductInfo from '@/components/ProductInfo/productinfo.component'

function CarouselImage(product) {
  const productLists = [
    {
      id: 1,
      image: Products,
      name: 'Hạt chi đó',
      price: 50000,
    },
    {
      id: 2,
      image: ProductOne,
      name: 'Hạt chi đó',
      price: 50000,
    },
    {
      id: 3,
      image: Products,
      name: 'Hạt chi đó',
      price: 50000,
    },
  ]

  return (
    <div className="carousel">
      <h3>Sản Phẩm Liên Quan</h3>
      <div className="carousel-product">
        {productLists.map((product) => {
          return <ProductInfo key={product.id} product={product} />
        })}
      </div>
    </div>
  )
}

export default CarouselImage
