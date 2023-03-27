import './navigation.component.scss'

import Badge from '@mui/material/Badge'
import UserPopover from './UserPopover/user-popover.component'
import CartPopper from './CartPopper/cart-popper.component'

import { ReactComponent as Wishlist } from '@/assets/icons/Wishlist.svg'

function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation-item">
        <CartPopper />
      </div>

      <div className="navigation-item">
        <UserPopover />
      </div>
    </div>
  )
}

export default Navigation
