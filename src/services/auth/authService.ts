import api from '@/api/axiosConfig';
import { SignInForm, SignUpForm } from '@/interfaces';
const baseUrl = 'auth';
export const AuthService = {
  signIn: async (data: SignInForm) => {
    try {
      const response = await api.post(`${baseUrl}/sign-in`, data);
      return response.data;
    } catch (error: any) {
      return (
        error?.response?.data ?? { success: false, message: 'Network error' }
      );
    }
  },

  signUp: async (data: SignUpForm) => {
    try {
      const response = await api.post(`${baseUrl}/sign-up`, data);
      return response.data;
    } catch (error: any) {
      return (
        error?.response?.data ?? { success: false, message: 'Network error' }
      );
    }
  },

  logOut: async () => {
    try {
      const response = await api.post(`${baseUrl}/logout`);
      return response.data;
    } catch (error: any) {
      return (
        error?.response?.data ?? { success: false, message: 'Network error' }
      );
    }
  },

  //   getProfile: async () => {
  //     console.log('Fetching user profile (token is auto-attached)');
  //     // apiClient will automatically add the token
  //     const response = await apiClient.get('/users/1');
  //     return response.data;
  //   },
};
