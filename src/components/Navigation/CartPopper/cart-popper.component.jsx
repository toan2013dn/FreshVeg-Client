import './cart-popper.styles.scss'

import * as React from 'react'
import Popper from '@mui/material/Popper'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined'
import TextOverflow from '@/components/TextOverflow/text-overflow.component'
import ImageBG from '@/assets/images/Product-Part-1.webp'
import Badge from '@mui/material/Badge'

import { useProductCart } from '@/store'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '@/store'
import { useState, useEffect } from 'react'
import { useSelectedWeight } from '@/store'
import { ReactComponent as Shopping } from '@/assets/icons/Shopping-icon.svg'

function CartPopper() {
  const [productCart, setProductCart] = useProductCart((state) => [state.productCart, state.setProductCart])
  const [selectedWeight] = useSelectedWeight((state) => [state.selectedWeight])
  // const [products, setProducts] = useState([
  //   {
  //     id: 1,
  //     name: 'Áo thun nam Áo thun namÁo thun namÁo thun namÁo thun namÁo thun namÁo thun namÁo thun namÁo thun namÁo thun namÁo thun nam',
  //     price: 100000,
  //     weight: '100gr',
  //     image: 'https://alokiddy.com.vn/Uploads/images/huong/tu-vung-tieng-anh-ve-cac-loai-rau-cu-qua.jpg',
  //   },
  //   {
  //     id: 2,
  //     name: 'Áo thun nam',
  //     price: 100000,
  //     weight: '500gr',
  //     image: 'https://alokiddy.com.vn/Uploads/images/huong/tu-vung-tieng-anh-ve-cac-loai-rau-cu-qua.jpg',
  //   },
  // ])
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const id = open ? 'simple-popper' : undefined
  const navigate = useNavigate()

  const handleToOrderDetail = () => {
    navigate('/order-detail')
  }

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }
  const handleClickAway = () => {
    setAnchorEl(null)
  }

  //handleDelete
  const handleDelete = (id) => {
    const newCart = productCart.filter((item) => item.productId !== id)
    setProductCart(newCart)
  }

  // Update the badge
  const [badgeContent, setBadgeContent] = useState(0)

  useEffect(() => {
    setBadgeContent(productCart.length)
  }, [productCart])

  return (
    <div>
      <div className="user-popover--img" aria-describedby={id} variant="contained" onClick={handleClick}>
        <Badge badgeContent={badgeContent} color="primary">
          <Shopping className="navigation-item--icon" />
        </Badge>
      </div>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
        arrow={true}
        disablePortal={false}
        modifiers={[
          {
            name: 'flip',
            enabled: false,
            options: {
              altBoundary: false,
              rootBoundary: 'document',
              padding: 8,
            },
          },
          {
            name: 'preventOverflow',
            enabled: true,
            options: {
              altAxis: true,
              altBoundary: false,
              tether: false,
              rootBoundary: 'viewport',
              padding: 8,
            },
          },
        ]}
      >
        <ClickAwayListener onClickAway={handleClickAway}>
          <div className="cart-popper--content">
            {productCart.length > 0 ? (
              <>
                {productCart.map((product) => (
                  <div key={product.productId} className="cart-popper--item">
                    <div style={{ display: 'flex', gap: '5px' }}>
                      <div className="cart-popper--item-img">
                        {product.productImage ? (
                          <img src={product.productImage} alt="product" />
                        ) : (
                          <img src={ImageBG} alt="product" />
                        )}
                      </div>
                      <div className="cart-popper--item-info">
                        <TextOverflow width={125} fontWeight={700} content={product.productName} />
                        <h4 className="price">{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ</h4>
                        {/* <p className="weight">{product.weight}</p> */}
                        <p className="weight">{selectedWeight}00gr</p>
                      </div>
                    </div>
                    <div className="cart-popper--item-btn">
                      <button onClick={() => handleDelete(product.productId)}>
                        <ClearOutlinedIcon />
                      </button>
                    </div>
                  </div>
                ))}
                <div className="cart-popper--btn">
                  <button className="btn btn--payment" onClick={handleToOrderDetail}>
                    Thanh Toán
                  </button>
                  <button className="btn btn--viewCart">Xem Giỏ Hàng</button>
                </div>
              </>
            ) : (
              <div className="cart-popper--item" style={{ display: 'flex', justifyContent: 'center' }}>
                <h4>Giỏ hàng trống</h4>
              </div>
            )}
          </div>
        </ClickAwayListener>
      </Popper>
    </div>
  )
}

export default CartPopper
