import Header from "@/components/Header/header.component";
import HomeProducts from "@/components/HomeProducts/homeproducts.component";
import Slider from "@/components/Slider/slider.component";
import Statistics from "@/components/Statistics/statistics.component";

const Home = () => {
  return (
    <div>
      <Header />

      <Slider />

      <HomeProducts />

      <Statistics />
      
    </div>  
  );
};

export default Home;
