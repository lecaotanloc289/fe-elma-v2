import { authService } from '@/services/auth/authService';
import { StateCreator, create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
export interface LoginResponse {
  _id: string;
  email: string;
  name: string;
  token: string;
}

export interface RegisterUser {
  name: string;
  description?: string;
  email: string;
  password: string;
}
export interface User {
  _id: string;
  email: string;
  name: string;
}
export type AuthStatus = 'authorized' | 'unauthorized' | 'pending';

export interface AuthState {
  status: AuthStatus;
  access_token?: string;
  user?: User;

  loginUser: (email: string, password: string) => Promise<void>;
  logoutUser: () => void;
  //   registerUser: (data: RegisterUser) => Promise<void>;
}

const storeApi: StateCreator<AuthState> = set => ({
  status: 'unauthorized',
  access_token: undefined,
  user: undefined,
  loginUser: async (email: string, password: string) => {
    try {
      const { access_token, ...user } = await authService.login(
        email,
        password
      );
      set({ status: 'authorized', access_token, user });
    } catch (error) {
      set({ status: 'unauthorized', access_token: undefined, user: undefined });
      console.error('Credenciales incorrect');
    }
  },
  logoutUser: () => {
    set({ status: 'unauthorized', access_token: undefined, user: undefined });
  },
  //   registerUser: async (data: RegisterUser) => {
  //     try {
  //       await AuthService.registerUser(data);
  //     } catch (error) {
  //       throw new Error(`${error}`);
  //     }
  //   },
});

export const useAuthStore = create<AuthState>()(
  devtools(persist(storeApi, { name: 'auth-storage' }))
);
