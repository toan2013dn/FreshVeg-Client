import './cart-popper.styles.scss'

import * as React from 'react'
import Badge from '@mui/material/Badge'

import Popper from '@mui/material/Popper'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '@/store'
import { ReactComponent as Shopping } from '@/assets/icons/Shopping-icon.svg'
import TextOverflow from '@/components/TextOverflow/text-overflow.component'

function CartPopper() {
  const [userInfo, setUserInfo] = useUserStore((state) => [state.userInfo, state.setUserInfo])
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Áo thun nam Áo thun namÁo thun namÁo thun namÁo thun namÁo thun namÁo thun namÁo thun namÁo thun namÁo thun namÁo thun nam',
      price: 100000,
      weight: '100gr',
      image: 'https://alokiddy.com.vn/Uploads/images/huong/tu-vung-tieng-anh-ve-cac-loai-rau-cu-qua.jpg',
    },
    {
      id: 2,
      name: 'Áo thun nam',
      price: 100000,
      weight: '500gr',
      image: 'https://alokiddy.com.vn/Uploads/images/huong/tu-vung-tieng-anh-ve-cac-loai-rau-cu-qua.jpg',
    },
  ])
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const id = open ? 'simple-popper' : undefined

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }
  const handleClickAway = () => {
    setAnchorEl(null)
  }

  //handleDelete
  const handleDelete = (id) => {
    console.log(id)
    const newCart = products.filter((item) => item.id !== id)
    setProducts(newCart)
  }

  return (
    <div>
      <div className="user-popover--img" aria-describedby={id} variant="contained" onClick={handleClick}>
        {userInfo.avatar ? (
          <img src={userInfo.avatar} alt="avatar" />
        ) : (
          <Badge badgeContent={4} color="primary">
            <Shopping className="navigation-item--icon" />
          </Badge>
        )}
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
            {products.length > 0 ? (
              <>
                {products.map((product) => (
                  <div key={product.name} className="cart-popper--item">
                    <div style={{ display: 'flex', gap: '5px' }}>
                      <div className="cart-popper--item-img">
                        <img src={product.image} alt="product" />
                      </div>
                      <div className="cart-popper--item-info">
                        <TextOverflow width={125} fontWeight={700} content={product.name} />
                        <h4 className="price">{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ</h4>
                        <p className="weight">{product.weight}</p>
                      </div>
                    </div>
                    <div className="cart-popper--item-btn">
                      <button onClick={() => handleDelete(product.id)}>
                        <ClearOutlinedIcon />
                      </button>
                    </div>
                  </div>
                ))}
                <div className="cart-popper--btn">
                  <button className="btn btn--payment">Thanh Toán</button>
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
