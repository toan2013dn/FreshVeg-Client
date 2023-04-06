import Header from '@/components/Header/header.component'
import HomeProducts from '@/components/HomeProducts/homeproducts.component'
import Slider from '@/components/Slider/slider.component'
import Statistics from '@/components/Statistics/statistics.component'
import HomeRecipe from '@/components/HomeRecipe/homerecipe.component'
import Footer from '@/components/Footer/footer.component'

const Home = () => {
  return (
    <div>
      <Header />

      <Slider />

      <HomeProducts />

      <Statistics />

      <HomeRecipe />

      <Footer />
    </div>
  )
}

export default Home
