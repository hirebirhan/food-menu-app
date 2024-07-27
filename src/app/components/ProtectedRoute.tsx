// components/ProtectedRoute.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../../../supabaseClient';

const ProtectedRoute = ({ children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const user = supabase.auth.user();
    if (user) {
      setIsAuthenticated(true);
    } else {
      router.push('/auth');
    }
  }, []);

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return children;
};

export default ProtectedRoute;
