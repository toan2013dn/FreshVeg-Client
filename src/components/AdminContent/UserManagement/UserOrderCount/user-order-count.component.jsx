import './user-order-count.styles.scss'

import { useTokenStore } from '@/store'
import { useEffect, useState } from 'react'

import axios from '@/api/axios'
import TextOverflow from '@/components/TextOverflow/text-overflow.component'
import Modal from '@mui/material/Modal'

function UserOrderCount({ isOpen, onClose, userId }) {
  const [token] = useTokenStore((state) => [state.token])
  const [userOrderCount, setUserOrderCount] = useState([])

  useEffect(() => {
    axios
      .get(`/statistic/userwithorder/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        // console.log(res.data)
        setUserOrderCount(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  console.log(userOrderCount)
  return (
    <Modal open={isOpen} onClose={onClose}>
      <>
        <div key={userOrderCount.user_ID} className="user-order-count">
          <h3 style={{ fontSize: '20px' }}>Thống kê người dùng</h3>
          <div className="user-order-count--name">
            <div style={{ display: 'flex', gap: '5px' }}>
              <h4>Tên người dùng:</h4>
              <TextOverflow content={userOrderCount.name} />
            </div>
            <h4>Số đơn hàng đã mua: {userOrderCount.orderCount} đơn hàng</h4>
          </div>
        </div>
      </>
    </Modal>
  )
}

export default UserOrderCount
