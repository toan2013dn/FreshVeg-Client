import './pagination.styles.scss'
import Pagination from '@mui/material/Pagination'

function PaginationComponent({ currentPage, productsPerPage, totalProducts, handlePageChange }) {
  const totalPages = Math.ceil(totalProducts / productsPerPage)

  return <Pagination count={totalPages} size="large" page={currentPage} onChange={handlePageChange} />
}

export default PaginationComponent
