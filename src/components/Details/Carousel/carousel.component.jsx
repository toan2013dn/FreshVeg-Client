import './carousel.styles.scss'

import { useProductStore } from '@/store'

import ProductInfo from '@/components/ProductInfo/productinfo.component'
import BackArrow from '@mui/icons-material/ArrowBackIosNew'
import FowardArrow from '@mui/icons-material/ArrowForwardIos'
import AliceCarousel from 'react-alice-carousel'

function CarouselImage() {
  const [products] = useProductStore((state) => [state.products])

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
