import './product-content.styles.scss'

import { ReactComponent as Cart } from '@/assets/icons/Cart.svg'
import { useProductCartStore, useUserStore } from '@/store'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

import axios from '@/api/axios'
import WeightSelect from '@/components/WeightSelect/weight-select.component'
import Login from '@/pages/Login/login.page'
import Modal from '@mui/material/Modal'
import SocialMediaSharing from '../SocialMediaSharing/socialmedia-sharing.component'

function ProductContent({ productId }) {
  const [content, setContent] = useState()

  useEffect(() => {
    axios
      .get('/product/' + productId)
      .then((res) => {
        setContent(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [productId])
  const [productCart, setProductCart] = useProductCartStore((state) => [state.productCart, state.setProductCart])
  const [userInfo] = useUserStore((state) => [state.userInfo])
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [weight, setWeight] = useState(100)

  const handleAddToCart = () => {
    if (userInfo === null) {
      setIsOpenModal(true)
    } else {
      if (productCart.some((item) => item.productId === content.productId)) {
        toast.error('Sản phẩm đã có trong giỏ hàng!')
      } else {
        setProductCart([...productCart, { ...content, weight: weight }])
        toast.success('Thêm vào giỏ hàng thành công!')
      }
    }
  }

  return (
    <div className="product-content">
      <div className="product-content--item" key={content?.productId}>
        <div className="product-content--item--name">
          <h3>{content?.productName}</h3>
          <div className="line"></div>
        </div>
        <div className="product-content--item--price">
          <h3>{content?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ</h3>
          <div className="line"></div>
        </div>
        <div className="product-content--item--weight">
          <h4>Khối lượng</h4>
          <div className="product-content--item--weight--select">
            <WeightSelect weight={weight} setWeight={setWeight} />
          </div>
        </div>
        <div className="product-content--item--button">
          <div className="line"></div>
          <button className="button" onClick={handleAddToCart}>
            <Cart />
            <div>Thêm Vào Giỏ Hàng</div>
          </button>
        </div>
        <div className="product-content--item--sharing">
          <SocialMediaSharing key={content?.productId} />
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Modal open={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <div>
          <Login onClose={() => setIsOpenModal(false)} />
        </div>
      </Modal>
    </div>
  )
}

export default ProductContent
