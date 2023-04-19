import './navigation.component.scss'

import Tooltip from '@mui/material/Tooltip'
import CartPopper from './CartPopper/cart-popper.component'
import UserPopover from './UserPopover/user-popover.component'

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
