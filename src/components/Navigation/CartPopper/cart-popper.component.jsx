import './cart-popper.styles.scss'

import ImageBG from '@/assets/images/Product-Part-1.webp'
import TextOverflow from '@/components/TextOverflow/text-overflow.component'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'
import Badge from '@mui/material/Badge'
import Popper from '@mui/material/Popper'
import * as React from 'react'

import { ReactComponent as Shopping } from '@/assets/icons/Shopping-icon.svg'
import { useProductCartStore } from '@/store'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CartPopper() {
  const [productCart, setProductCart] = useProductCartStore((state) => [state.productCart, state.setProductCart])
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const id = open ? 'simple-popper' : undefined
  const navigate = useNavigate()

  const handleToOrderConfirm = () => {
    navigate('/order-confirm')
  }

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
    const newCart = productCart.filter((item) => item.product.productId !== id)
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
                  <div key={product.product?.productId} className="cart-popper--item">
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
                        <h4 className="price">
                          {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ/100gr
                        </h4>
                        <p className="weight">{product.weight.toFixed(1)}kg</p>
                      </div>
                    </div>
                    <div className="cart-popper--item-btn">
                      <button onClick={() => handleDelete(product.product.productId)}>
                        <DeleteForeverOutlinedIcon />
                      </button>
                    </div>
                  </div>
                ))}
                <div className="cart-popper--btn">
                  <button className="btn btn--payment" onClick={handleToOrderConfirm}>
                    Thanh Toán
                  </button>
                  <button className="btn btn--viewCart" onClick={handleToOrderDetail}>
                    Xem Giỏ Hàng
                  </button>
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
