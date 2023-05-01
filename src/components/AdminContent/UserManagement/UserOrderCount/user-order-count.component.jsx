import './user-order-count.styles.scss'

import TextOverflow from '@/components/TextOverflow/text-overflow.component'
import { useTokenStore } from '@/store'
import Modal from '@mui/material/Modal'

function UserOrderCount({ isOpen, onClose }) {
  const [token] = useTokenStore((state) => [state.token])

  // useEffect(() => {
  //   axios
  //     .get('/statistic/top10UserWithMostOrder', {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res.data)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [])

  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className="user-order-count">
        <h3 style={{ fontSize: '20px' }}>Thống kê người dùng</h3>
        <div className="user-order-count--name">
          <div style={{ display: 'flex', gap: '5px' }}>
            <h4>Tên người dùng:</h4>
            <TextOverflow content={`Toanf`} />
          </div>
          <h4>Số đơn hàng đã mua: 10 đơn hàng</h4>
        </div>
      </div>
    </Modal>
  )
}

export default UserOrderCount
