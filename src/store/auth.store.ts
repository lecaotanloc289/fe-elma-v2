import { AuthStatus, SignInForm, SignUpForm, User } from '@/interfaces';
import { AuthService } from '@/services/auth/AuthService';
import { decodeJwt } from '@/utils/jwt-decode';
import { StateCreator, create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type AuthState = {
  status: AuthStatus;
  error?: string | null;
  access_token?: string;
  user?: User;
  signIn: (data: SignInForm) => Promise<void>;
  signUp: (data: SignUpForm) => Promise<void>;
  logOut: () => void;
  setTokens: (access_token: string) => void;
  clear: () => void;
};

export const authApi: StateCreator<AuthState> = set => ({
  status: 'unauthorized',
  access_token: undefined,
  user: undefined,
  signIn: async (data: SignInForm) => {
    try {
      const result = await AuthService.signIn(data);
      if (result?.success) {
        const { access_token } = result.data;
        const payload = decodeJwt(access_token);

        if (!payload) {
          set({
            status: 'unauthorized',
            access_token: undefined,
            user: undefined,
          });
          return result;
        }

        const { sub, email, fullname, iat, exp }: any = payload;

        set({
          status: 'authorized',
          access_token,
          user: { id: sub, email, fullname, iat, exp },
        });

        return result;
      } else {
        set({
          status: 'unauthorized',
          access_token: undefined,
          user: undefined,
        });
        return result;
      }
    } catch (error) {
      set({ status: 'unauthorized', access_token: undefined, user: undefined });
      console.error('Credencials incorrect');
    }
  },

  signUp: async (data: SignUpForm) => {
    try {
      const result = await AuthService.signUp(data);
      return result;
    } catch (error) {
      console.error('Some thing went wrong. Please try again.');
    }
  },

  logOut: async () => {
    try {
      const result = await AuthService.logOut();
      set({ status: 'unauthorized', access_token: undefined, user: undefined });
      localStorage.removeItem('auth-storage');
      localStorage.removeItem('cart-storage');
      return result;
    } catch (error) {
      console.log(error);
    }
  },

  setTokens: access_token => set({ access_token }),

  clear: () => set({ access_token: undefined }),
});

export const useAuthStore = create<AuthState>()(
  devtools(persist(authApi, { name: 'auth-storage' }))
);
