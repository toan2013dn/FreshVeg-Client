import './order-detail-table.styles.scss'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProductCartStore } from '@/store'
import { useSelectedWeightStore } from '@/store'

import * as React from 'react'
import ProductOne from '@/assets/images/Product-Part-2.webp'
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
import Swal from 'sweetalert2/dist/sweetalert2.js'
import ImageBG from '@/assets/images/Product-Part-1.webp'

function OrderDetailTable() {
  const [productCart, setProductCart] = useProductCartStore((state) => [state.productCart, state.setProductCart])
  const [selectedWeight] = useSelectedWeightStore((state) => [state.selectedWeight])
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    let sum = 0
    productCart.forEach((item) => {
      sum += item.price * selectedWeight
    })
    setTotalPrice(sum)
  }, [productCart, selectedWeight])

  const handleDelete = (id) => {
    Swal.fire({
      html: '<h4>Bạn có muốn xoá sản phẩm này không?</h4>',
      showDenyButton: true,
      confirmButtonText: 'Có',
      denyButtonText: `Huỷ`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire({
          html: '<h4>Xoá thành công!</h4>',
          icon: 'success',
        })
      }
    })
  }

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
              {productCart.map((row) => (
                <TableRow key={row?.productId}>
                  <TableCell scope="row">
                    <div className="image">
                      {row?.productImage ? (
                        <img src={row?.productImage} alt="product" />
                      ) : (
                        <img src={ImageBG} alt="product" />
                      )}
                    </div>
                    <div className="text">{row?.productName}</div>
                  </TableCell>
                  <TableCell align="center">
                    {(row?.price ?? 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ
                  </TableCell>
                  <TableCell align="center">
                    <WeightSelect productId={row.productId} />
                  </TableCell>
                  <TableCell align="center">
                    <div className="total-price"> {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ </div>
                  </TableCell>
                  <TableCell align="center">
                    <div className="delete-button" onClick={handleDelete}>
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
        <button className="home-products--button continue-shopping">
          <BackArrow />
          <Link to={'/categories'}>Tiếp Tục Mua Hàng</Link>
        </button>
        <div className="proceed-to-checkout">
          <div className="total">
            <h4>Tổng Thanh Toán: </h4>
            <h4>{totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ </h4>
          </div>

          <button className="home-products--button">
            <Link to={'/order-confirm'}>Tiến Hành Thanh Toán</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrderDetailTable
