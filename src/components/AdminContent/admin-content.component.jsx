import './admin-content.styles.scss'

import { useAdminStore } from '@/store'

import AdminDashboard from './AdminDashboard/admin-dashboard.component'
import CategoriesManagement from './CategoriesManagement/categories-management.component'
import OrderManagementTable from './OrderManagement/order-management-table.component'
import ProductManagement from './ProductManagement/product-management.component'
import UserManagement from './UserManagement/user-management.component'
import ProductStatistic from '../AdminHeader/AdminStatistic/ProductStatistic/product-statistic.component'

function AdminContent() {
  const [tabId] = useAdminStore((state) => [state.tabId])

  const tabs = {
    1: { name: 'Thể loại', component: <CategoriesManagement /> },
    2: { name: 'Sản phẩm', component: <ProductManagement /> },
    3: { name: 'Đơn hàng', component: <OrderManagementTable /> },

    5: { name: 'Thống kê người dùng', component: <UserManagement /> },
    6: { name: 'Thống kê sản phẩm', component: <ProductStatistic /> },
  }
  return <div className="admin-content">{tabId === -1 ? <AdminDashboard /> : tabs[tabId].component}</div>
}

export default AdminContent
