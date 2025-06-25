import React from 'react';
import { Route, Routes } from 'react-router';
import ResetPassword from '@/pages/ResetPassword';
import Category from '@/pages/category/Category';
import SearchResult from '@/pages/search/SearchResult';
const Home = React.lazy(() => import('@/pages/home/Home'));
const Login = React.lazy(() => import('@/pages/sign-in/Login'));
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
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/page-404" element={<Page400 />} />
      <Route path="/page-500" element={<Page500 />} />
    </Routes>
  );
};

export default AppRoutes;
