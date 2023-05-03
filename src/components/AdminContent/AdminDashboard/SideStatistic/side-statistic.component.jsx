import './side-statistic.styles.scss'

import { useAdminStore, useTokenStore } from '@/store'
import { useEffect, useState } from 'react'

import axios from '@/api/axios'
import TextOverflow from '@/components/TextOverflow/text-overflow.component'

function SideStatistic() {
  const [token] = useTokenStore((state) => [state.token])
  const [customers, setCustomers] = useState([])
  const [setTabId] = useAdminStore((state) => [state.setTabId])

  const handleCustomerClick = () => {
    setTabId(5)
  }
  const handleProductClick = () => {
    setTabId(6)
  }

  useEffect(() => {
    axios
      .get('/statistic/top10UserWithMostOrder', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        setCustomers(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const products = [
    {
      id: 4,
      name: 'Chuối tiêu Phan Thiết',
      orders: '8000+ lượt mua',
    },
    {
      id: 5,
      name: 'Hành tây Đà Lạt',
      orders: '1500+ lượt mua',
    },
    {
      id: 6,
      name: 'Dâu tây vườn Đà Lạt',
      orders: '1000+ lượt mua',
    },
  ]
  return (
    <div className="side-statistic">
      <div className="side-statistic--customers">
        <h3>Thống kê khách hàng</h3>
        {customers.slice(0, 3).map((customer, index) => (
          <div className="side-statistic--customers--item" key={index}>
            <div className="side-statistic--customers--item--avatar">
              <img
                src={
                  customer.avatar
                    ? customer?.avatar
                    : 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png'
                }
                alt=""
              />
            </div>
            <h4 className="side-statistic--customers--item--name">
              <TextOverflow width={120} content={customer.name} />
            </h4>
            <h4 className="side-statistic--customers--item--rank">{customer.rank}</h4>
            <h4 className="side-statistic--customers--item--orders">{customer.orderCount} đơn hàng</h4>
          </div>
        ))}
        <button className="btn" onClick={handleCustomerClick}>
          Xem thêm
        </button>
      </div>

      <div className="side-statistic--products">
        <h3>Thống kê sản phẩm</h3>
        {products.map((product, index) => (
          <div className="side-statistic--products--item" key={index}>
            <h4 className="side-statistic--products--item--name">
              {' '}
              <TextOverflow width={150} content={product.name} />
            </h4>
            <h4 className="side-statistic--products--item--rank">{product.rank}</h4>
            <h4 className="side-statistic--products--item--orders">{product.orders}</h4>
          </div>
        ))}
        <button className="btn" onClick={handleProductClick}>
          Xem thêm
        </button>
      </div>
    </div>
  )
}

export default SideStatistic
