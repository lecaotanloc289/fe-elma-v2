export type AuthStatus = 'authorized' | 'unauthorized' | 'pending';

export interface SignInForm {
  email: string;
  password: string;
}

export interface SignUpForm {
  email: string;
  password: string;
  phone: string;
  fullname: string;
}

export interface JwtPayload {
  sub: string;
  email: string;
  fullname?: string;
  iat?: number;
  exp?: number;
}
