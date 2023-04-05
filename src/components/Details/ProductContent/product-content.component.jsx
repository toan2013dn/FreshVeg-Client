import './product-content.styles.scss'

import { ReactComponent as Cart } from '@/assets/icons/Cart.svg'
import { ReactComponent as Wishlist } from '@/assets/icons/Wishlist.svg'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import { useProductStore } from '@/store'
import { useProductCartStore } from '@/store'
import { ToastContainer, toast } from 'react-toastify'
import { useUserStore } from '@/store'

import Modal from '@mui/material/Modal'
import axios from '@/api/axios'
import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import React from 'react'
import SocialMediaSharing from '../SocialMediaSharing/socialmedia-sharing.component'
import CartPopper from '@/components/Navigation/CartPopper/cart-popper.component'
import Login from '@/pages/Login/login.page'
import WeightSelect from '@/components/WeightSelect/weight-select.component'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 100,
    },
  },
}

const names = ['100gr', '200gr', '300gr', '400gr', '500gr']

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
  // console.log(content)
  const [productCart, setProductCart] = useProductCartStore((state) => [state.productCart, state.setProductCart])
  const [userInfo, setUserInfo] = useUserStore((state) => [state.userInfo, state.setUserInfo])
  const [isOpenModal, setIsOpenModal] = useState(false)
  // const theme = useTheme()
  const [personName, setPersonName] = React.useState([])

  const handleChange = (event) => {
    const {
      target: { value },
    } = event
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    )
  }
  const handleClick = () => {
    if (userInfo === null) {
      setIsOpenModal(true)
    } else {
      if (productCart.some((item) => item.productId === content.productId)) {
        toast.error('Sản phẩm đã có trong giỏ hàng!')
      } else {
        setProductCart([...productCart, content])
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
            {/* <FormControl sx={{ m: 1, width: 250, mt: 1 }}>
              <Select
                displayEmpty
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <em>100gr</em>
                  }
                  return selected.join(', ')
                }}
                MenuProps={MenuProps}
                inputProps={{ 'aria-label': 'Without label' }}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl> */}
            <WeightSelect />
          </div>
        </div>
        <div className="product-content--item--button">
          <div className="line"></div>
          <button className="button" onClick={handleClick}>
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
