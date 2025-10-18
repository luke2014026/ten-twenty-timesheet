export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
}

export const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@ticktock.com',
    password: 'admin123',
    name: 'Admin User',
  },
  {
    id: '2',
    email: 'user@ticktock.com',
    password: 'user123',
    name: 'Test User',
  },
];
