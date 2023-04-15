import './navigation.component.scss'

import Badge from '@mui/material/Badge'
import UserPopover from './UserPopover/user-popover.component'
import CartPopper from './CartPopper/cart-popper.component'
import Tooltip from '@mui/material/Tooltip'

import { ReactComponent as Wishlist } from '@/assets/icons/Wishlist.svg'

function Navigation() {
  return (
    <div className="navigation">
      <Tooltip title="Xem giỏ hàng">
        <div className="navigation-item">
          <CartPopper />
        </div>
      </Tooltip>

      <Tooltip title="Xem thông tin">
        <div className="navigation-item">
          <UserPopover />
        </div>
      </Tooltip>
    </div>
  )
}

export default Navigation
