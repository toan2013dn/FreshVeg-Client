import './details.styles.scss'
import ProductImage from './ProductImage/product-image.component'
import ProductContent from './ProductContent/product-content.component'
import MoreProductInfo from './MoreInfo/more-info.component'
import CarouselImage from './Carousel/carousel.component'

import { useProductStore } from '@/store'

function Details({ productId }) {
  return (
    <div className="details">
      <div className="details-flex">
        <div className="details-flex--left">
          <ProductImage productId={productId} />
        </div>
        <div className="details-flex--right">
          <ProductContent productId={productId} />
        </div>
      </div>
      <div className="details-more">
        <MoreProductInfo />
      </div>
      <div className="details-carousel">
        <CarouselImage />
      </div>
    </div>
  )
}

export default Details
