// components/ProtectedRoute.js
import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../../../supabaseClient';

const ProtectedRoute = ({ children}:{children: ReactNode}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const user = supabase.auth.user();
    if (user !== null) {
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
