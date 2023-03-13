import './order-detail-table.styles.scss'

import ProductOne from '@/assets/images/Product-Part-2.webp'

import { useState, useEffect } from 'react'
import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import WeightSelect from '@/components/WeightSelect/weight-select.component'
import BackArrow from '@mui/icons-material/KeyboardBackspace'
import { Link } from 'react-router-dom'

function OrderDetailTable() {
  const rows = [
    {
      id: 1,
      name: 'Sản phẩm 1',
      image: ProductOne,
      price: 100000,
      total: 100000,
    },
    {
      id: 2,
      name: 'Sản phẩm 2',
      image: ProductOne,
      price: 200000,
      total: 400000,
    },
  ]

  const [totalPrice, setTotalPrice] = useState(0)
  const calculateTotalPrice = () => {
    let total = 0
    rows.forEach((row) => {
      total += row.total
    })
    return total
  }

  // Update the total price whenever the rows change
  useEffect(() => {
    setTotalPrice(calculateTotalPrice())
  }, [rows])
  return (
    <div>
      <div className="detail-table">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="caption table">
            <TableHead>
              <TableRow>
                <TableCell>SẢN PHẨM</TableCell>
                <TableCell align="center">GIÁ</TableCell>
                <TableCell align="center">KHỐI LƯỢNG</TableCell>
                <TableCell align="center">THÀNH TIỀN</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell scope="row">
                    <img src={row.image} alt="product" />
                    <div className="text">{row.name}</div>
                  </TableCell>
                  <TableCell align="center">{row.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ</TableCell>
                  <TableCell align="center">
                    <WeightSelect />
                  </TableCell>
                  <TableCell align="center">{row.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ</TableCell>
                  <TableCell align="center">
                    <div className="delete-button">
                      <DeleteForeverIcon />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="button">
        <button className="home-products--button">
          <BackArrow />

          <Link to={'/categories'}>Tiếp Tục Mua Hàng</Link>
        </button>
        <div className="proceed-to-checkout">
          <h4>Tổng Thanh Toán: {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ </h4>
          <button className="home-products--button">
            <Link to={'/'}>Tiến Hành Thanh Toán</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrderDetailTable
