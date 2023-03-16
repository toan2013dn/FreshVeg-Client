import './notification.styles.scss'

import NotificationIcon from '@mui/icons-material/NotificationsNoneOutlined'
import Badge from '@mui/material/Badge'

function Notification() {
  return (
    <div className="notification">
      <Badge badgeContent={2} color="success">
        <NotificationIcon />
      </Badge>
    </div>
  )
}

export default Notification
