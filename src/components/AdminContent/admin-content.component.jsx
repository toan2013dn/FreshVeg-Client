import './admin-content.styles.scss'
import OrderManagementTable from './OrderManagement/order-management-table.component'

function AdminContent() {
  return (
    <div className="admin-content">
      <h3>Quản Lý Đơn Hàng</h3>
      <OrderManagementTable />
    </div>
  )
}

export default AdminContent
