import { mockUsers } from '../mock/users';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  token?: string;
  user?: {
    id: string;
    email: string;
    name: string;
  };
  error?: string;
}

export const login = async (credentials: LoginRequest): Promise<LoginResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const user = mockUsers.find(
    (u) => u.email === credentials.email && u.password === credentials.password
  );

  if (!user) {
    return {
      success: false,
      error: 'Invalid email or password',
    };
  }

  const token = btoa(`${user.id}:${Date.now()}`);

  return {
    success: true,
    token,
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
    },
  };
};

export const logout = () => {
  sessionStorage.removeItem('authToken');
  sessionStorage.removeItem('user');
};

export const getStoredAuth = () => {
  const token = sessionStorage.getItem('authToken');
  const userStr = sessionStorage.getItem('user');
  
  if (!token || !userStr) return null;
  
  return {
    token,
    user: JSON.parse(userStr),
  };
};

export const storeAuth = (token: string, user: any) => {
  sessionStorage.setItem('authToken', token);
  sessionStorage.setItem('user', JSON.stringify(user));
};
