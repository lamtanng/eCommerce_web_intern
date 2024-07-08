import { UserRole } from './userRole.type';

export default interface DecodedToken {
  exp: number;
  iat: number;
  sub: string;
  userRole: UserRole | undefined;
}
