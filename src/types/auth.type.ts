import DecodedToken from './decodedToken.type';
import LoginResponseProps from './loginResponse.type';

export default interface AuthProps extends LoginResponseProps, DecodedToken {}
