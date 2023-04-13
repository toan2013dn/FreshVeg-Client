import './user-order-info.styles.scss'

import { useState } from 'react'
import { useBillInfoStore } from '@/store'

import axios from '@/api/axios'
import AirplanemodeActiveOutlinedIcon from '@mui/icons-material/AirplanemodeActiveOutlined'
import Modal from '@mui/material/Modal'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined'
import TextOverflow from '@/components/TextOverflow/text-overflow.component'
import PriceWithDots from '@/components/PriceWithDots/price-with-dots.component'

function UserOrderInfo({ isOpen, onClose }) {
  const [billInfo] = useBillInfoStore((state) => [state.billInfo])
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Áo thun namo thun namo thun namo thun nam',
      price: '100000',
      weight: '100gr',
      img: 'https://tintuc.hoang-phuc.com/wp-content/uploads/2021/12/meme-cheems-17.jpg',
    },
    {
      id: 2,
      name: 'Áo thun nam',
      price: '890799070979070',
      weight: '100gr',
      img: 'https://tintuc.hoang-phuc.com/wp-content/uploads/2021/12/meme-cheems-17.jpg',
    },
    {
      id: 2,
      name: 'Áo thun nam',
      price: '890799070979070',
      weight: '100gr',
      img: 'https://tintuc.hoang-phuc.com/wp-content/uploads/2021/12/meme-cheems-17.jpg',
    },
    {
      id: 2,
      name: 'Áo thun nam',
      price: '890799070979070',
      weight: '100gr',
      img: 'https://tintuc.hoang-phuc.com/wp-content/uploads/2021/12/meme-cheems-17.jpg',
    },
  ])
  const [displayCount, setDisplayCount] = useState(3) // default display count

  const handleShowMore = () => {
    if (displayCount <= 3) {
      setDisplayCount(products.length)
    } else {
      setDisplayCount(displayCount + 4)
    }
  }

  const handleShowLess = () => {
    setDisplayCount(3)
  }
  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className="user-order-info">
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div className="order-date">
            <p>Ngày đặt hàng: 12/12/2021</p>
          </div>
          <div className="estimate-delivery">
            <AirplanemodeActiveOutlinedIcon />
            <p>Ngày dự kiến giao hàng: 12/12/2021</p>
          </div>
        </div>
        <div className={products.length > 3 ? 'scroll-container' : ''}>
          {products.slice(0, displayCount).map((product) => (
            <div className="user-order-info__product" key={product.id}>
              <div className="image">
                <img src={product.img} alt="" />
              </div>
              <div className="info">
                <div className="name">
                  <TextOverflow width={300} fontWeight={700} content={product.name} />
                </div>
                <div className="price">
                  <PriceWithDots price={product.price} fontWeight={700} />
                </div>
                <div className="weight">{product.weight}</div>
              </div>
            </div>
          ))}
          {products.length > 3 && (
            <div className="show-more-less">
              {displayCount === 3 ? (
                <button onClick={handleShowMore}>
                  Xem thêm <KeyboardArrowDownOutlinedIcon />
                </button>
              ) : (
                <button onClick={handleShowLess}>
                  Thu gọn
                  <KeyboardArrowUpOutlinedIcon />
                </button>
              )}
            </div>
          )}
          <div className="order-detail">
            <div className="order-note">
              <div className="order-note__title">Ghi chú đơn hàng</div>
              <div className="order-note__content">
                <p>hôm nay em đến trường mẹ dắt em từng bước hôm nay mẹ lên nương một mình em tới lớp</p>
              </div>
            </div>
            <div className="price-details">
              <div className="price-total flex">
                <div className="price-total__title">Tổng tiền hàng</div>
                <div className="price-total__price">
                  <PriceWithDots price="1204140" />
                </div>
              </div>
              <div className="shipping-total flex">
                <div className="shipping-total__title">Phí vận chuyển</div>
                <div className="shipping-total__price">
                  <PriceWithDots price="1204140" />
                </div>
              </div>
              <div className="sub-total flex">
                <div className="sub-total__title" style={{ fontSize: '18px', fontWeight: '700' }}>
                  Tổng cộng
                </div>
                <div className="sub-total__price" style={{ fontWeight: '700', color: 'var(--primary-color)' }}>
                  <PriceWithDots price="1204140" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default UserOrderInfo
