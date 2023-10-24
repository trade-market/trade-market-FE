import client from '@/api/client';

// Todo: RTK Query로 변경
class UserService {
  async checkNicknameDuplication(nickname: string) {
    const response = await client.post('/user/nickname/', { nickname });
    return response.data;
  }

  async updateUserInfo(body: any) {
    const response = await client.put('/user/update', body);
    return response.data;
  }
}

export default new UserService();
