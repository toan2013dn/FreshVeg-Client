import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/index.scss'
import Home from './pages/Home/home.page'
import Login from './pages/Login/login.page'
import SignUp from './pages/SignUp/signup.page'
import Products from './pages/Products/products.page'
import FilterPanel from './components/FilterPanel/filter-panel.component'
import ProductsDetails from './pages/ProductsDetails/products-details.component'
import OrderDetail from './pages/OrderDetail/order-detail.component'
import OrderConfirm from './pages/OrderConfirm/order-confirm.component'
import OrderSuccess from './pages/OrderSuccess/order-success.component'
import UserPage from './pages/UserPage/user-page.component'
import AdminPage from './pages/AdminPage/admin-page.component'
import UploadImage from './components/AdminContent/UploadImage/upload-image.component'
import NewPassword from './components/UserPageComponents/NewPassword/new-password.component'
import UserPopover from './components/Navigation/UserPopover/user-popover.component'
import UserOrder from './components/UserPageComponents/UserOrder/user-order.component'
import Test from './pages/TestToan/test'
import WeightSelect from './components/WeightSelect/weight-select.component'
import ForgotPasswordHomePage from './components/ForgotPasswordAtHomePage/forgot-password-homepage'
import ForgotPassword from './components/UserPageComponents/ForgotPassword/forgot-password.component'
import ForgotPasswordOTP from './components/ForgotPasswordAtHomePage/ForgotPasswordOTP/forgot-password-otp.component'
import NewPasswordHomepage from './components/ForgotPasswordAtHomePage/SetNewPasswordHomePage/set-new-password-homepage.component'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },

  {
    path: '/login',
    element: <Login />,
  },

  {
    path: '/signup',
    element: <SignUp />,
  },

  {
    path: '/products',
    element: <Products />,
  },
  {
    path: '/filter-panel',
    element: <FilterPanel />,
  },
  {
    path: '/products-details/:productId',
    element: <ProductsDetails />,
  },
  {
    path: '/order-detail',
    element: <OrderDetail />,
  },
  {
    path: '/order-confirm',
    element: <OrderConfirm />,
  },
  {
    path: '/order-success',
    element: <OrderSuccess />,
  },
  {
    path: '/user-page',
    element: <UserPage />,
  },
  { path: '/admin-page', element: <AdminPage /> },
  { path: '/new-password', element: <NewPassword /> },
  { path: '/user-order', element: <UserOrder /> },
  { path: '/test', element: <Test /> },
  { path: '/select-weight', element: <WeightSelect /> },
  { path: '/forgot-password', element: <ForgotPasswordHomePage /> },
  { path: '/check-otp', element: <ForgotPasswordOTP /> },
  { path: '/set-new-password', element: <NewPasswordHomepage /> },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <RouterProvider router={router} />,
  // </React.StrictMode>,
)
