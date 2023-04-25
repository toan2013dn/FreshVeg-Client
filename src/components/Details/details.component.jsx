import './details.styles.scss'

import { useEffect, useState } from 'react'

import CarouselImage from './Carousel/carousel.component'
import MoreProductInfo from './MoreInfo/more-info.component'
import ProductContent from './ProductContent/product-content.component'
import ProductImage from './ProductImage/product-image.component'
import ReactLoading from 'react-loading'
import axios from '@/api/axios'

function Details({ productId, content, setContent }) {
  return (
    <div className="details">
      <div className="details-flex">
        <div className="details-flex--left">
          <ProductImage productId={productId} content={content} setContent={setContent} />
        </div>
        <div className="details-flex--right">
          <ProductContent productId={productId} content={content} setContent={setContent} />
        </div>
      </div>
      <div className="details-more">
        <MoreProductInfo content={content} setContent={setContent} />
      </div>
      <div className="details-carousel">
        <CarouselImage />
      </div>
    </div>
  )
}

export default Details
