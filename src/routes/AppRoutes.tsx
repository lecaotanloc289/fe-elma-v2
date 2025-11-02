import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import ResetPassword from '@/pages/ResetPassword';
import Category from '@/pages/category/Category';
import SearchResult from '@/pages/search/SearchResult';
import OrderSuccess from '@/pages/order/OrderSuccess';
import ProductDetail from '@/pages/product/ProductDetail';
import SignUpAlt from '@/pages/sign-up/SignUpAlt';
import SignIn from '@/pages/sign-in/SignIn';
import OrderTracking from '@/pages/order/OrderTracking';
import Cart from '@/pages/cart/Cart';
import Checkout from '@/pages/cart/Checkout';
import OrderTrackingDetail from '@/pages/order/OrderTrackingDetail';
import PrivateRoute from '@/components/PrivateRoute';
import Favorite from '@/pages/favorite/Favorite';
import UserProfile from '@/pages/user/UserProfile';
import PublicRoute from '@/components/PublicRoute';
const Home = React.lazy(() => import('@/pages/home/Home'));
const SignInAlt = React.lazy(() => import('@/pages/sign-in/SignInAlt'));
const SignUp = React.lazy(() => import('@/pages/sign-up/SignUp'));
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
      <Route path="/store" element={<ProductDetail />} />
      <Route element={<PublicRoute />}>
        <Route path="/sign-in-alt" element={<SignInAlt />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-up-alt" element={<SignUpAlt />} />
      </Route>
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* Private routes */}
      <Route element={<PrivateRoute />}>
        <Route path="/cart" element={<Cart />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/order-tracking" element={<OrderTracking />} />
        <Route
          path="/order-tracking-detail"
          element={<OrderTrackingDetail />}
        />
        <Route path="/user-profile" element={<UserProfile />} />
      </Route>

      {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
      <Route path="/page-404" element={<Page400 />} />
      <Route path="/page-500" element={<Page500 />} />
    </Routes>
  );
};

export default AppRoutes;
