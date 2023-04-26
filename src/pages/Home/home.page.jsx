import React, { useEffect, useState } from 'react'

import Header from '@/components/Header/header.component'
import HomeProducts from '@/components/HomeProducts/homeproducts.component'
import Slider from '@/components/Slider/slider.component'
import Statistics from '@/components/Statistics/statistics.component'
import ReactLoading from 'react-loading'
import Footer from '@/components/Footer/footer.component'
import ProductBanner from '@/components/ProductBanner/product-banner.component'
import Contact from '@/components/Contact/contact.component'
import BackToTopButton from '@/components/BackToTopButton/backtotop-button.component'

const Home = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  return (
    <>
      {loading ? (
        <ReactLoading className="loading" type={'spin'} color={'#4caf50'} height={'6%'} width={'6%'} />
      ) : (
        <div>
          <Header />

          <BackToTopButton />

          <Slider />

          <HomeProducts />

          <Statistics />

          <ProductBanner />

          <Contact />

          <Footer />
        </div>
      )}
    </>
  )
}

export default Home
