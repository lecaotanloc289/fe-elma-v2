import api from '@/api/axiosConfig';
const baseUrl = 'auth';
export const authService = {
  login: async (email: string, password: string) => {
    try {
      const response = await api.post(`${baseUrl}/sign-in`, {
        email,
        password,
      });
      console.log(response);
      if (response.data?.success) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  },

  signup: async ({ email, password, fullname, phone }: any) => {
    try {
      const response = await api.post(`${baseUrl}/sign-in`, {
        email,
        password,
        fullname,
        phone,
      });
      console.log(response);
      if (response.data?.success) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  },

  logout: async () => {
    return { success: true };
  },

  //   getProfile: async () => {
  //     console.log('Fetching user profile (token is auto-attached)');
  //     // apiClient will automatically add the token
  //     const response = await apiClient.get('/users/1');
  //     return response.data;
  //   },
};
