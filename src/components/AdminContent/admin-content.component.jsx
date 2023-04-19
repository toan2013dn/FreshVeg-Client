import './admin-content.styles.scss'

import { useAdminStore } from '@/store'

// import AdminDashboard from './AdminDashboard/admin-dashboard.component'
import CategoriesManagement from './CategoriesManagement/categories-management.component'
import OrderManagementTable from './OrderManagement/order-management-table.component'
import ProductManagement from './ProductManagement/product-management.component'

function AdminContent() {
  const [tabId] = useAdminStore((state) => [state.tabId])

  const tabs = {
    3: { name: 'Đơn hàng', component: <OrderManagementTable /> },
    1: { name: 'Thể loại', component: <CategoriesManagement /> },
    4: { name: 'Sản phẩm', component: <ProductManagement /> },
    2: { name: 'Sản phẩm', component: <ProductManagement /> },
  }
  return (
    <div className="admin-content">
      {/* <div className="admin-dashboard">
        <AdminDashboard />
      </div> */}
      {/* <div className="order-table">
        <h3>Quản Lý Đơn Hàng</h3>
        <OrderManagementTable />
      </div> */}
      {/* <div className="categories">
        <h3>Quản Lý Thể Loại</h3>
        <CategoriesManagement />
      </div>{' '} */}
      {/* <div className="products-management">
        <h3>Quản Lý Sản Phẩm</h3>
        <ProductManagement />
      </div> */}
      {tabId === -1 ? (
        <div>
          <h1>-1</h1>
        </div>
      ) : (
        tabs[tabId].component
      )}
    </div>
  )
}

export default AdminContent
