import './product-statistic.styles.scss'

import { DataGrid, GridToolbar } from '@mui/x-data-grid'

function ProductStatistic() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'productName', headerName: 'Tên sản phẩm', width: 450 },
    { field: 'quantity', headerName: 'Số lượng bán ra', width: 300 },
    {
      field: 'remaining',
      headerName: 'Số lượng còn trong kho',
      width: 230,
    },
  ]

  const rows = [
    { id: 1, productName: 'Snow', quantity: 'Jon', remaining: 35 },
    { id: 2, productName: 'Lannister', quantity: 'Cersei', remaining: 42 },
    { id: 3, productName: 'Lannister', quantity: 'Jaime', remaining: 45 },
    { id: 4, productName: 'Stark', quantity: 'Arya', remaining: 16 },
    { id: 5, productName: 'Targaryen', quantity: 'Daenerys', remaining: null },
    { id: 6, productName: 'Melisandre', quantity: null, remaining: 150 },
    { id: 7, productName: 'Clifford', quantity: 'Ferrara', remaining: 44 },
    { id: 8, productName: 'Frances', quantity: 'Rossini', remaining: 36 },
    { id: 9, productName: 'Roxie', quantity: 'Harvey', remaining: 65 },
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
