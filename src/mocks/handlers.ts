import { IUser } from '@/types/UserTypes';
import { rest } from 'msw';

// const users: IUser[] = [
//   {
//     id: '123',
//     profile_image:
//       'https://static.wanted.co.kr/images/events/1633/f85834e9.jpg',
//     nickname: '거래왕',
//     coordinates: { latitude: '37.123', longitude: '127.123' },
//     grade: 'one',
//     town: '서초동',
//   },
//   {
//     id: '1234',
//     profile_image:
//       'https://static.wanted.co.kr/images/events/1633/f85834e9.jpg',
//     nickname: '거래왕',
//     coordinates: { latitude: '37.123', longitude: '127.123' },
//     grade: 'one',
//     town: '화서동',
//   },
// ];

export const handlers = [
  rest.post('/api/login/google', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        code: 200,
        message: '로그인 성공',
        accessToken: 'abcdefg12345',
        refreshToken: 'testrefresh12345',
      })
    );
  }),

  // rest.post('/api/login/kakao', (req, res, ctx) => {
  //   // 신규 유저일 경우
  //   return res(
  //     ctx.status(301),
  //     ctx.json({
  //       authId: '123',
  //       authType: 'KAKAO',
  //       nickname: '거래왕',
  //       profileImage:
  //         'https://static.wanted.co.kr/images/events/1633/f85834e9.jpg',
  //     })
  //   );
  // }),

  rest.post('/api/login/naver', (req, res, ctx) => {
    // 로그인 성공시
    return res(
      ctx.status(200),
      ctx.json({
        code: 200,
        message: '로그인 성공',
        accessToken: 'abcdefg12345',
        refreshToken: 'testrefresh12345',
      })
    );
  }),

  rest.get('/api/user/info', (req, res, ctx) => {
    const user1 = 'abcdefg12345';
    const accessToken = req.headers.get('Authorization')?.split(' ')[1];
    const index = user1 === accessToken ? 0 : 1;

    if (!accessToken) {
      return res(
        ctx.status(401),
        ctx.json({ code: 401, message: '로그인이 필요합니다.' })
      );
    }

    if (accessToken === 'test')
      return res(
        ctx.status(401),
        ctx.json({ code: 401, message: '로그인이 필요합니다.' })
      );

    // return res(
    //   ctx.json({
    //     ...users[index],
    //   })
    // );
  }),

  rest.post('/api/register', async (req, res, ctx) => {
    const body = await req.json();
    const { nickname, coordinates, profileImg, profileImgFile } = body;
    // users.push({
    //   id: '9910',
    //   nickname,
    //   profile_image: profileImg,
    //   coordinates,
    //   town: '임시동',
    //   grade: 'one',
    // });

    return res(
      ctx.delay(),
      ctx.status(201),
      ctx.json({
        code: 201,
        message: '회원가입 성공',
        accessToken: 'geggeg2',
        refreshToken: 'testrefresh12345',
      })
    );
  }),

  rest.post('/api/user/nickname', async (req, res, ctx) => {
    const body = await req.json();
    const nickname = body.nickname;
    if (nickname === '거래왕') {
      return res(
        ctx.status(400),
        ctx.json({ code: 400, message: '이미 존재하는 닉네임입니다.' })
      );
    }
    return res(ctx.json({ code: 200, message: '사용 가능한 닉네임입니다.' }));
  }),

  rest.post('/api/oauth/token', async (req, res, ctx) => {
    const refreshToken = req.headers.get('Authorization')?.split(' ')[1];
    console.log(refreshToken);

    return res(
      ctx.status(201),
      ctx.json({
        code: 201,
        message: '토큰 재발급 성공',
        accessToken: 'abcdefg12345',
      })
    );
  }),

  rest.put('/api/user/update', async (req, res, ctx) => {
    const body = await req.json();

    return res(ctx.json({ code: 200, message: '수정 성공' }));
  }),
];
