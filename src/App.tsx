import { useEffect, useState } from 'react';

import { User } from 'entities/User';

import { Routes } from '@/components/Routes/Routes';
import { AuthContext } from '@/components/context/authContext';

export const App = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setUser(JSON.parse(user));
    } 
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Routes />
    </AuthContext.Provider>
  );
};
