import { JwtPayload, jwtDecode } from 'jwt-decode';
import DecodedToken from '../types/decodedToken.type';
export const decodeToken = (accessToken: string): DecodedToken => jwtDecode(accessToken);
