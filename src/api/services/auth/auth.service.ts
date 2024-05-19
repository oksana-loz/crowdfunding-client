import { $authAPI } from '@/api/services/auth/instance';

class AuthService {
  login(email: string, password: string) {
    return $authAPI.post<any>('/auth/login', { email, password });
  }

  registration(email: string, password: string, firstName: string, lastName: string) {
    return $authAPI.post<any>('/auth/register', { email, password, firstName, lastName });
  }
}

export const authService = new AuthService();
