import { useAuthStore } from '@/store';
import { Navigate, Outlet } from 'react-router';

const ProtectedRoute = () => {
  const authorizedStatus = useAuthStore(state => state.status);

  if (authorizedStatus === 'unauthorized' || authorizedStatus === 'pending') {
    return <Navigate to={'/sign-in'} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
