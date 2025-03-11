import React from 'react';
import AppBar from '@/pages/AppBar';
import { Route, Routes } from 'react-router';
import ResetPassword from '@/pages/ResetPassword';
const Login = React.lazy(() => import('@/pages/Login'));
const Register = React.lazy(() => import('@/pages/Register'));
const ChangePassword = React.lazy(() => import('@/pages/ChangePassword'));
const Page400 = React.lazy(() => import('@/pages/Page400'));
const Page500 = React.lazy(() => import('@/pages/Page500'));
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppBar />} />
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
