import './side-statistic.styles.scss'

import React, { useEffect, useState } from 'react'
import { useTokenStore } from '@/store'
import { useNavigate } from 'react-router-dom'

import axios from '@/api/axios'
import TextOverflow from '@/components/TextOverflow/text-overflow.component'

function SideStatistic() {
  const [token] = useTokenStore((state) => [state.token])
  const [customers, setCustomers] = useState([])
  const navigate = useNavigate()

  const handleCustomerClick = () => {
    navigate('/admin/user-management')
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
        console.log(res.data)
        setCustomers(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  // const customers = [
  //   {
  //     id: 1,
  //     avatar:
  //       'https://vothisaucamau.edu.vn/wp-content/uploads/2022/12/1670191226_34_Hinh-Anh-Meme-Cheems-Tau-He-Cuc-Manh-Cuoi-Sai.jpg',
  //     name: 'Nguyễn Văn A',

  //     orders: '10 đơn hàng',
  //   },
  //   {
  //     id: 2,
  //     avatar:
  //       'https://vothisaucamau.edu.vn/wp-content/uploads/2022/12/1670191226_34_Hinh-Anh-Meme-Cheems-Tau-He-Cuc-Manh-Cuoi-Sai.jpg',
  //     name: 'Nguyễn Văn A',

  //     orders: '10 đơn hàng',
  //   },
  //   {
  //     id: 3,
  //     avatar:
  //       'https://vothisaucamau.edu.vn/wp-content/uploads/2022/12/1670191226_34_Hinh-Anh-Meme-Cheems-Tau-He-Cuc-Manh-Cuoi-Sai.jpg',
  //     name: 'Nguyễn Văn A',

  //     orders: '10 đơn hàng',
  //   },
  // ]

  const products = [
    {
      id: 4,
      avatar:
        'https://vothisaucamau.edu.vn/wp-content/uploads/2022/12/1670191226_34_Hinh-Anh-Meme-Cheems-Tau-He-Cuc-Manh-Cuoi-Sai.jpg',
      name: 'Quả chuối',

      orders: '144+ lượt mua',
    },
    {
      id: 5,
      avatar:
        'https://vothisaucamau.edu.vn/wp-content/uploads/2022/12/1670191226_34_Hinh-Anh-Meme-Cheems-Tau-He-Cuc-Manh-Cuoi-Sai.jpg',
      name: 'Quả chuối',

      orders: '144+ lượt mua',
    },
    {
      id: 6,
      avatar:
        'https://vothisaucamau.edu.vn/wp-content/uploads/2022/12/1670191226_34_Hinh-Anh-Meme-Cheems-Tau-He-Cuc-Manh-Cuoi-Sai.jpg',
      name: 'Quả chuối',

      orders: '144+ lượt mua',
    },
  ]
  return (
    <div className="side-statistic">
      <div className="side-statistic--customers">
        <h3>Thống kê khách hàng</h3>
        {customers.map((customer, index) => (
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
        <button className="btn">Xem thêm</button>
      </div>

      <div className="side-statistic--products">
        <h3>Thống kê sản phẩm</h3>
        {products.map((customer, index) => (
          <div className="side-statistic--products--item" key={index}>
            <div className="side-statistic--products--item--avatar">
              <img src={customer.avatar} alt="" />
            </div>
            <h4 className="side-statistic--products--item--name">{customer.name}</h4>
            <h4 className="side-statistic--products--item--rank">{customer.rank}</h4>
            <h4 className="side-statistic--products--item--orders">{customer.orders}</h4>
          </div>
        ))}
        <button className="btn" onClick={handleCustomerClick}>
          Xem thêm
        </button>
      </div>
    </div>
  )
}

export default SideStatistic
