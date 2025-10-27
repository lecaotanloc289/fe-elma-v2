import { User } from './User';

export type AuthStatus = 'authorized' | 'unauthorized' | 'pending';
export interface AuthState {
  status: AuthStatus;
  error?: string | null;
  access_token?: string;
  refresh_token?: string;
  user?: User;
  signIn: (data: SignInForm) => Promise<void>;
  signUp: (data: SignUpForm) => Promise<void>;
  logOut: () => void;
}
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
