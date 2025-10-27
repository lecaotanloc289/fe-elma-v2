import api from '@/api/axiosConfig';
import { SignInForm, SignUpForm } from '@/interfaces';
const baseUrl = 'auth';
export const authService = {
  signIn: async (data: SignInForm) => {
    try {
      const response = await api.post(`${baseUrl}/sign-in`, data);
      if (response.data?.success) {
        return response.data;
      }
    } catch (error: any) {
      return error?.response?.data;
    }
  },

  signUp: async (data: SignUpForm) => {
    try {
      const response: any = await api.post(`${baseUrl}/sign-up`, data);

      if (response.data?.success) {
        return response.data;
      }
    } catch (error: any) {
      return error?.response?.data;
    }
  },

  logOut: async () => {
    return { success: true };
  },

  //   getProfile: async () => {
  //     console.log('Fetching user profile (token is auto-attached)');
  //     // apiClient will automatically add the token
  //     const response = await apiClient.get('/users/1');
  //     return response.data;
  //   },
};
