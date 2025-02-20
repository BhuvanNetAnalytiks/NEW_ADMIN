import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './authProvider';

const useProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);
};

export default useProtectedRoute;
