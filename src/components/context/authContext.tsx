import { createContext } from 'react';

import { User } from 'entities/User';

export const AuthContext = createContext({
  user: null as User | null,
  setUser: (user: User) => {},
});
