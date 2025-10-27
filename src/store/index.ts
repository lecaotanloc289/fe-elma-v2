import { AuthState, SignInForm, SignUpForm } from '@/interfaces';
import { authService } from '@/services/auth/authService';
import { getUserFromToken } from '@/utils/jwt-decode';
import { StateCreator, create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const storeApi: StateCreator<AuthState> = set => ({
  status: 'unauthorized',
  access_token: undefined,
  refresh_token: undefined,
  user: undefined,
  signIn: async (data: SignInForm) => {
    try {
      const result = await authService.signIn(data);
      if (result?.success) {
        const { access_token, refresh_token } = result?.data;
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
      console.error('Invalid credentials ');
    }
  },

  signUp: async (data: SignUpForm) => {
    try {
      const result = await authService.signUp(data);
      return result;
    } catch (error) {
      console.error('Credencial incorrect');
    }
  },

  logOut: () => {
    set({ status: 'unauthorized', access_token: undefined, user: undefined });
  },
});

export const useAuthStore = create<AuthState>()(
  devtools(persist(storeApi, { name: 'auth-storage' }))
);
