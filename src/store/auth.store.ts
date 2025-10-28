import { AuthState, SignInForm, SignUpForm } from '@/interfaces';
import { AuthService } from '@/services/auth/AuthService';
import { getUserFromToken } from '@/utils/jwt-decode';
import { StateCreator, create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
export const authApi: StateCreator<AuthState> = set => ({
  status: 'unauthorized',
  access_token: undefined,
  refresh_token: undefined,
  user: undefined,
  signIn: async (data: SignInForm) => {
    try {
      const result = await AuthService.signIn(data);
      if (result?.success) {
        const { access_token, refresh_token } = result.data;
        const { sub, email, fullname, iat, exp }: any =
          getUserFromToken(access_token);
        set({
          status: 'authorized',
          access_token,
          // refresh_token,
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

  logOut: () => {
    set({ status: 'unauthorized', access_token: undefined, user: undefined });
    localStorage.removeItem('auth-storage');
    localStorage.removeItem('cart-storage');
  },
});

export const useAuthStore = create<AuthState>()(
  devtools(persist(authApi, { name: 'auth-storage' }))
);
