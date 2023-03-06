import './carousel.styles.scss'

import Products from '@/assets/images/Products.webp'
import ProductOne from '@/assets/images/Product-Part-1.webp'
import ProductInfo from '@/components/ProductInfo/productinfo.component'
import AliceCarousel from 'react-alice-carousel'


import BackArrow from '@mui/icons-material/ArrowBackIosNew';
import FowardArrow from '@mui/icons-material/ArrowForwardIos';

function CarouselImage() {
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
      image:
        'https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Corndogs-7832ef6.jpg?quality=90&resize=556,505',
      name: 'Hạt chi đó',
      price: 50000,
    },
    {
      id: 4,
      image: 'https://ychef.files.bbci.co.uk/976x549/p04tx3m6.jpg',
      name: 'Hạt chi đó',
      price: 50000,
    },
  ]

  const items = productLists.map((product) => {
    return <ProductInfo key={product.id} product={product} />
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
            1024: { items: 3 },
          }}
          renderPrevButton={() => <BackArrow />}
          renderNextButton={() => <FowardArrow />}
        />
      </div>
    </div>
  )
}

export default CarouselImage

