import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import ResetPassword from '@/pages/ResetPassword';
import Category from '@/pages/category/Category';
import SearchResult from '@/pages/search/SearchResult';
import OrderSuccess from '@/pages/order/OrderSuccess';
import ProductDetail from '@/pages/product_detail/ProductDetail';
import RegisterAlt from '@/pages/register/RegisterAlt';
import SignIn from '@/pages/sign-in/SignIn';
import OrderTracking from '@/pages/order/OrderTracking';
import Cart from '@/pages/cart/Cart';
import Checkout from '@/pages/cart/Checkout';
import OrderTrackingDetail from '@/pages/order/OrderTrackingDetail';
import ProtectedRoute from '@/component/ProtectedRoute';
const Home = React.lazy(() => import('@/pages/home/Home'));
const SignInAlt = React.lazy(() => import('@/pages/sign-in/SignInAlt'));
const Register = React.lazy(() => import('@/pages/register/Register'));
const ChangePassword = React.lazy(() => import('@/pages/ChangePassword'));
const Page400 = React.lazy(() => import('@/pages/Page400'));
const Page500 = React.lazy(() => import('@/pages/Page500'));
const AppRoutes = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Home />} />
      <Route path="/category" element={<Category />} />
      <Route path="/search" element={<SearchResult />} />
      <Route path="/product-detail" element={<ProductDetail />} />
      <Route path="/sign-in-alt" element={<SignInAlt />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register-alt" element={<RegisterAlt />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* Private routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/order-tracking" element={<OrderTracking />} />
        <Route
          path="/order-tracking-detail"
          element={<OrderTrackingDetail />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="/order-success" element={<OrderSuccess />} />

        <Route path="/change-password" element={<ChangePassword />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="/page-404" element={<Page400 />} />
      <Route path="/page-500" element={<Page500 />} />
    </Routes>
  );
};

export default AppRoutes;
