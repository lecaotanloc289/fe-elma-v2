import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
  sub: string;
  email: string;
  fullname?: string;
  iat?: number;
  exp?: number;
}

export function getUserFromToken(token: string): JwtPayload | null {
  try {
    return jwtDecode<JwtPayload>(token);
  } catch (e) {
    console.error('Invalid token', e);
    return null;
  }
}
