import './admin-content.styles.scss'
import CategoriesManagement from './CategoriesManagement/categories-management.component'
import OrderManagementTable from './OrderManagement/order-management-table.component'

function AdminContent() {
  return (
    <div className="admin-content">
      {/* <div className="order-table">
        <h3>Quản Lý Đơn Hàng</h3>
        <OrderManagementTable />
      </div> */}

      <div className="categories">
        <h3>Quản Lý Thể Loại</h3>
        <CategoriesManagement />
      </div>
    </div>
  )
}

export default AdminContent
