import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.scss";
import Home from "./pages/Home/home.page";
import Login from "./pages/Login/login.page";
import SignUp from "./pages/SignUp/signup.page";
import Categories from "./pages/Categories/categories.page";
import FilterPanel from "./components/FilterPanel/filter-panel.component";
import ProductsDetails from "./pages/ProductsDetails/products-details.component";
import OrderDetail from "./pages/OrderDetail/order-detail.component";
import OrderConfirm from "./pages/OrderConfirm/order-confirm.component";
import OrderSuccess from "./pages/OrderSuccess/order-success.component";
import UserPage from "./pages/UserPage/user-page.component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/signup",
    element: <SignUp />,
  },

  {
    path: "/categories",
    element: <Categories />,
  },
  {
    path: "/filter-panel",
    element: <FilterPanel />,
  } ,
  {
    path: "/products-details",
    element: <ProductsDetails />,
  } ,
  {
    path: "/order-detail",
    element: <OrderDetail />,
  },
  {
    path: "/order-confirm",
    element: <OrderConfirm />,
  },
  {
    path: "/order-success",
    element: <OrderSuccess />,
  },
  {
    path: "/user-page",
    element: <UserPage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
