import React from 'react';
import { Route, Routes } from 'react-router';
import ResetPassword from '@/pages/ResetPassword';
import Category from '@/pages/category/Category';
import SearchResult from '@/pages/search/SearchResult';
import OrderSuccess from '@/pages/order/OrderSuccess';
import ProductDetail from '@/pages/product_detail/ProductDetail';
import RegisterAlt from '@/pages/register/RegisterAlt';
import SignIn from '@/pages/sign-in/SignIn';
const Home = React.lazy(() => import('@/pages/home/Home'));
const SignInAlt = React.lazy(() => import('@/pages/sign-in/SignInAlt'));
const Register = React.lazy(() => import('@/pages/register/Register'));
const ChangePassword = React.lazy(() => import('@/pages/ChangePassword'));
const Page400 = React.lazy(() => import('@/pages/Page400'));
const Page500 = React.lazy(() => import('@/pages/Page500'));
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category" element={<Category />} />
      <Route path="/search" element={<SearchResult />} />
      <Route path="/product-detail" element={<ProductDetail />} />
      <Route path="/order-success" element={<OrderSuccess />} />
      <Route path="/sign-in-alt" element={<SignInAlt />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register-alt" element={<RegisterAlt />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/page-404" element={<Page400 />} />
      <Route path="/page-500" element={<Page500 />} />
    </Routes>
  );
};

export default AppRoutes;
