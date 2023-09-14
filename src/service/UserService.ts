import client from '@/api/client';

class UserService {
  async getUserInfo() {
    const response = await client.get('/user/info');
    return response.data;
  }

  async checkNicknameDuplication(nickname: string) {
    const response = await client.post('/user/nickname/', { nickname });
    return response.data;
  }
}

export default new UserService();
