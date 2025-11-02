import { useAuthStore } from '@/store/auth.store';
import { Navigate, Outlet } from 'react-router';

const PrivateRoute = () => {
  const { status, access_token, logOut } = useAuthStore();

  if (!access_token && status !== 'authorized') {
    logOut();
    return <Navigate to={'/sign-in'} replace />;
  }
  return <Outlet />;
};

export default PrivateRoute;
