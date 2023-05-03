import './product-statistic.styles.scss'

import { DataGrid, GridToolbar } from '@mui/x-data-grid'

function ProductStatistic() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'productName', headerName: 'Tên sản phẩm', width: 450 },
    { field: 'quantity', headerName: 'Số lượt mua', width: 300 },
    {
      field: 'remaining',
      headerName: 'Khối lượng còn trong kho',
      width: 230,
    },
  ]

  const rows = [
    { id: 1, productName: 'Rau má Gia Lai', quantity: '20', remaining: 100 },
    { id: 2, productName: 'Hành tây Đà Lạt', quantity: '10', remaining: 59 },
    { id: 3, productName: 'Sầu riêng Bến Tre', quantity: '24', remaining: 588 },
    { id: 4, productName: 'Chanh Phan Thiết', quantity: '26', remaining: 16 },
    { id: 5, productName: 'Gừng Lạng Sơn', quantity: '77', remaining: 668 },
    { id: 6, productName: 'Mướp Gia Lai', quantity: '47', remaining: 868 },
    { id: 7, productName: 'Bí đỏ Ninh Thuận', quantity: '84', remaining: 44 },
    { id: 8, productName: 'Đậu hà lan xanh Đà Lạt', quantity: '25', remaining: 334 },
    { id: 9, productName: 'Mộc nhĩ Quảng Ngãi', quantity: '645', remaining: 4344 },
    { id: 10, productName: 'Nấm rơm Quảng Ngãi', quantity: '234', remaining: 44 },
    { id: 11, productName: 'Nấm đùi gà Đà Lạt', quantity: '12', remaining: 100 },
    { id: 12, productName: 'Bí đao Ninh Thuận', quantity: '1424', remaining: 140 },
    { id: 13, productName: 'Củ sen Đăk Lăk', quantity: '442', remaining: 140 },
    { id: 14, productName: 'Củ sắn dây Quảng Nam', quantity: '3553', remaining: 140 },
    { id: 15, productName: 'Bắp cải thảo Đà Lạt', quantity: '1123', remaining: 140 },
    { id: 16, productName: 'Xoài cát Hòa Lộc', quantity: '554', remaining: 140 },
    { id: 17, productName: 'Củ cần Tây Đà Lạt', quantity: '443', remaining: 140 },
    { id: 18, productName: 'Cà chua bi Gia Lai', quantity: '55', remaining: 140 },
    { id: 19, productName: 'Cà rốt Đà Lạt', quantity: '446', remaining: 140 },
    { id: 20, productName: 'Rau mồng tơi hữu cơ Quảng Nam', quantity: '4643', remaining: 50 },
    { id: 21, productName: 'Cam xoàn hữu cơ Bến Tre', quantity: '45', remaining: 50 },
    { id: 22, productName: 'Thanh long ruột đỏ Cần Thơ', quantity: '6645', remaining: 50 },
    { id: 23, productName: 'Bông cải xanh Đà Lạt', quantity: '455', remaining: 50 },
    { id: 24, productName: 'Khoai tây Đắk Lắk', quantity: '44', remaining: 50 },
    { id: 25, productName: 'Cải thìa hữu cơ Đà Lạt', quantity: '66', remaining: 50 },
    { id: 26, productName: 'Xà lách Romaine Đà Lạt', quantity: '5676', remaining: 150 },
    { id: 27, productName: 'Rau muống hữu cơ Quảng Nam', quantity: '252', remaining: 150 },
    { id: 28, productName: 'Cải bẹ xanh/Cải cay hữu cơ Quảng Ngãi', quantity: '2525', remaining: 150 },
    { id: 29, productName: 'Khổ qua rừng Quảng Ngãi', quantity: '12', remaining: 150 },
    { id: 30, productName: 'Nấm kim châm hữu cơ Gia Lai', quantity: '78687', remaining: 150 },
    { id: 31, productName: 'Củ cải trắng hữu cơ Đà Lạt', quantity: '235', remaining: 150 },
    { id: 32, productName: 'Tỏi Lý Sơn', quantity: '235', remaining: 150 },
    { id: 33, productName: 'Khoai mỡ Đắk Lắk', quantity: '355', remaining: 70 },
    { id: 34, productName: 'Ớt chuông hữu cơ Đà Lạt', quantity: '352', remaining: 70 },
    { id: 35, productName: 'Táo Envy New Zealand', quantity: '112', remaining: 70 },
    { id: 36, productName: 'Măng tây hữu cơ Ninh Thuận', quantity: '144', remaining: 70 },
    { id: 37, productName: 'Cải bó xôi Ninh Thuận', quantity: '141', remaining: 70 },
    { id: 38, productName: 'Dâu tây vườn Đà Lạt', quantity: '636', remaining: 70 },
    { id: 39, productName: 'Củ dền hữu cơ Đắk Lắk', quantity: '3636', remaining: 70 },
    { id: 40, productName: 'Khoai lang Bình Thuận', quantity: '2234', remaining: 80 },
    { id: 41, productName: 'Chuối tiêu Phan Thiết', quantity: '8909', remaining: 80 },
    { id: 42, productName: 'Bầu đất Phan Thiết', quantity: '336', remaining: 80 },
    { id: 43, productName: 'Su hào hữu cơ Đà Lạt', quantity: '141', remaining: 80 },
    { id: 44, productName: 'Khoai môn Quảng Ngãi', quantity: '74', remaining: 80 },
    { id: 45, productName: 'Rau má Gia Lai', quantity: '14', remaining: 80 },
    { id: 46, productName: 'Diếp cá Quảng Nam', quantity: '9679', remaining: 80 },
    { id: 47, productName: 'Hành tây Đà Lạt', quantity: '2525', remaining: 90 },
    { id: 48, productName: 'Nghệ Đắk Lắk', quantity: '14', remaining: 90 },
    { id: 49, productName: 'Sầu riêng Bến Tre', quantity: '346', remaining: 90 },
    { id: 50, productName: '"Chanh Phan Thiết', quantity: '47', remaining: 90 },
  ]

  return (
    <div className="product-statistic">
      <DataGrid
        style={{ fontSize: '16px' }}
        rowHeight={100}
        rows={rows}
        //   getRowId={(row) => row.categoryId}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
      />
    </div>
  )
}

export default ProductStatistic
