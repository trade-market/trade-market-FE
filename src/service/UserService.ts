import client from '@/api/client';

class UserService {
  async getUserInfo() {
    const response = await client.get('/user/info');
    return response.data;
  }
}

export default new UserService();
