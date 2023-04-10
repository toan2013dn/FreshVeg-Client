import './order-detail-table.styles.scss'

import { useProductCartStore, useSelectedWeightStore } from '@/store'
import { Link } from 'react-router-dom'

import ImageBG from '@/assets/images/Product-Part-1.webp'
import PriceWithDots from '@/components/PriceWithDots/price-with-dots.component'
import WeightSelect from '@/components/WeightSelect/weight-select.component'
import useTotalPrice from '@/hooks/useTotalPrice'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import BackArrow from '@mui/icons-material/KeyboardBackspace'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Swal from 'sweetalert2/dist/sweetalert2.js'

function OrderDetailTable() {
  const [productCart, setProductWeight, setProductCart] = useProductCartStore((state) => [
    state.productCart,
    state.setProductWeight,
    state.setProductCart,
  ])
  const { totalPrice } = useTotalPrice()

  const handleDelete = (id) => {
    Swal.fire({
      html: '<h4>Bạn có muốn xoá sản phẩm này không?</h4>',
      showDenyButton: true,
      confirmButtonText: 'Có',
      denyButtonText: `Huỷ`,
      confirmButtonColor: '#FF0000',
      denyButtonColor: '#e0e0e0',
      icon: 'warning',
    }).then((result) => {
      if (result.isConfirmed) {
        const newCart = productCart.filter((item) => item.productId !== id)
        setProductCart(newCart)
        Swal.fire({
          html: '<h4>Xoá thành công!</h4>',
          icon: 'success',
          showConfirmButton: false,
          timer: 1300,
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
                    <WeightSelect weight={row?.weight} setWeight={(value) => setProductWeight(row.productId, value)} />
                  </TableCell>
                  <TableCell align="center">
                    <div className="total-price">
                      {((row?.price * row?.weight) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <div className="delete-button" onClick={() => handleDelete(row.productId)}>
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
            <h4>
              <PriceWithDots price={totalPrice} />
            </h4>
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
