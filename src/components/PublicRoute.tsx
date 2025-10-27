import { useAuthStore } from '@/store';
import { Navigate, Outlet } from 'react-router';

const ProtectedRoute = () => {
  const authorizedStatus = useAuthStore(state => state.status);
  const access_token = useAuthStore(state => state.access_token);

  if (authorizedStatus === 'authorized' && access_token) {
    return <Navigate to={'/'} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
