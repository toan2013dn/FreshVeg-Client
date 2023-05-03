import './slider.component.scss'
import { ReactComponent as Recycle } from '@/assets/icons/Recycle.svg'
import { ReactComponent as Arrow } from '@/assets/icons/Arrow.svg'
import { Link } from 'react-router-dom'
import { Splide, SplideSlide } from '@splidejs/react-splide'

import ProductBanner1 from '@/assets/images/thumbnail1.webp'
import ProductBanner2 from '@/assets/images/thumbnail2.jpg'
import ProductBanner3 from '@/assets/images/thumbnail3.jpg'

function Slider() {
  const options = {
    type: 'loop',
    autoplay: true,
    interval: 5000,
    pauseOnHover: false,
  }

  return (
    <div className="slider">
      <Splide aria-label="My Favorite Images" options={options}>
        <SplideSlide>
          <div className="slider-img">
            <img src={ProductBanner1} alt="Image 1" />
          </div>

          <div className="slider-text">
            <div className="slider-content">
              <Recycle className="slider-content--icon" />
              <h2 className="slider-content--title">Healthy Food</h2>
            </div>
            <h4 className="slider-content--text">
              FreshVeg là một nơi tuyệt vời để mua sắm cho những người quan tâm đến sức khỏe và an toàn thực phẩm. Tại
              đây, bạn có thể tìm thấy những loại rau củ quả được trồng và chăm sóc một cách tự nhiên, không sử dụng hóa
              chất và phân bón độc hại. Ngoài ra, FreshVeg cũng cung cấp thông tin về nguồn gốc của các sản phẩm, giúp
              cho người mua có thể yên tâm về chất lượng và nguồn gốc của những sản phẩm mình sử dụng. Tất cả những điều
              này đều giúp tạo ra một môi trường mua sắm an toàn và đáng tin cậy cho những ai quan tâm đến sức khỏe và
              môi trường sống.
            </h4>
            <div className="slider-buttons">
              <button className="slider-buttons--button ">
                <Link to={'/products'}>
                  Xem Sản Phẩm
                  <Arrow className="slider-buttons--icon" />
                </Link>
              </button>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="slider-img">
            <img src={ProductBanner2} alt="Image 2" />
          </div>
          <div className="slider-text1">
            <h3 style={{ color: '#4caf50', textTransform: 'capitalize' }}>Sản phẩm đa dạng và phong phú</h3>
            <h3 style={{ color: '#4caf50', textTransform: 'capitalize' }}>Miễn phí Vận Chuyển</h3>{' '}
            <h3 style={{ color: '#4caf50', textTransform: 'capitalize' }}> Giỏ hàng và thanh toán trực tuyến</h3>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="slider-img">
            <img src={ProductBanner3} alt="Image 2" />
          </div>
        </SplideSlide>
      </Splide>
    </div>
  )
}

export default Slider
