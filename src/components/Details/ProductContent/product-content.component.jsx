import './product-content.styles.scss'

import { ReactComponent as Cart } from '@/assets/icons/Cart.svg'
import { useProductCartStore, useUserStore } from '@/store'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

import WeightSelect from '@/components/WeightSelect/weight-select.component'
import Login from '@/pages/Login/login.page'
import Modal from '@mui/material/Modal'
import SocialMediaSharing from '../SocialMediaSharing/socialmedia-sharing.component'

function ProductContent({ content }) {
  const [productCart, setProductCart] = useProductCartStore((state) => [state.productCart, state.setProductCart])
  const [userInfo] = useUserStore((state) => [state.userInfo])
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [weight, setWeight] = useState(0.1)

  console.log(content)

  const handleAddToCart = () => {
    if (content) {
      if (content.weight === 0) {
        toast.error('Sản phẩm hiện đang hết hàng!')
        return
      } else if (content.weight < weight) {
        toast.error(`Sản phẩm hiện chỉ còn ${content.weight}kg!`)
        return
      } else if (weight < 0.1) {
        toast.error('Khối lượng tối thiểu là 100g!')
        return
      } else {
        const product = {
          product: { productId: content.productId },
          price: content.price,
          weight,
          productName: content.productName,
          productImage: content.productImages[0].imageLink,
        }
        if (userInfo === null) {
          setIsOpenModal(true)
        } else {
          const existingProductIndex = productCart.findIndex((item) => item.product.productId === content.productId)
          if (existingProductIndex === -1) {
            setProductCart([...productCart, product])
            toast.success('Thêm vào giỏ hàng thành công!')
          } else {
            const existingProduct = productCart[existingProductIndex]
            const updatedWeight = existingProduct.weight + weight
            if (updatedWeight > content.weight) {
              toast.warning('Khối lượng sản phẩm vượt quá Khối lượng có sẵn!')
            } else {
              const updatedProduct = { ...existingProduct, weight: updatedWeight }
              const updatedProductCart = [...productCart]
              updatedProductCart.splice(existingProductIndex, 1, updatedProduct)
              setProductCart(updatedProductCart)
              toast.success('Cập nhật giỏ hàng thành công!')
            }
          }
        }
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
          <h3>{content?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ/100gr</h3>
          <div className="line"></div>
        </div>
        <div className="product-content--item--weight">
          <div className="select-weight">
            <h4>Khối lượng</h4>
            <div className="product-content--item--weight--select">
              <WeightSelect weight={weight} setWeight={setWeight} />
            </div>
          </div>
          <h4>
            Còn lại:{' '}
            <span style={{ fontSize: '16px', fontWeight: '700' }}>
              {content?.weight < 1 ? content?.weight * 1000 + 'gr' : content?.weight + 'kg'}
            </span>
          </h4>
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
