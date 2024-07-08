import { UserRole } from './userRole.type';

export default interface UserProps {
  id?: string;
  role?: UserRole;
  email: string;
  name?: string;
  address?: string;
  createdAt?: string;
  updatedAt?: string;
}
