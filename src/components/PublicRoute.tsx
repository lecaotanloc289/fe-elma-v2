import { useAuthStore } from '@/store/auth.store';
import { Navigate, Outlet } from 'react-router';

const ProtectedRoute = () => {
  const { status, access_token } = useAuthStore();

  if (status === 'authorized' && access_token) {
    return <Navigate to={'/'} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
