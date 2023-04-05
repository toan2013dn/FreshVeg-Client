import './carousel.styles.scss'

import { useProductStore } from '@/store'

import Products from '@/assets/images/Products.webp'
import ProductOne from '@/assets/images/Product-Part-1.webp'
import ProductInfo from '@/components/ProductInfo/productinfo.component'
import AliceCarousel from 'react-alice-carousel'
import BackArrow from '@mui/icons-material/ArrowBackIosNew'
import FowardArrow from '@mui/icons-material/ArrowForwardIos'

function CarouselImage() {
  const [products, setProducts] = useProductStore((state) => [state.products, state.setProducts])

  const items = products.map((product) => {
    return <ProductInfo key={product.productId} product={product} />
  })

  return (
    <div className="carousel">
      <h3>Sản Phẩm Liên Quan</h3>
      <div className="carousel-product">
        <AliceCarousel
          autoPlay
          autoPlayInterval="3000"
          disableDotsControls
          infinite
          items={items}
          responsive={{
            0: { items: 1 },
            568: { items: 2 },
            1024: { items: 4 },
          }}
          renderPrevButton={() => <BackArrow />}
          renderNextButton={() => <FowardArrow />}
        />
      </div>
    </div>
  )
}

export default CarouselImage
