import { User } from '@/types/UserTypes';
import { rest } from 'msw';

const users: User[] = [
  {
    id: '123',
    profile_image:
      'https://static.wanted.co.kr/images/events/1633/f85834e9.jpg',
    nickname: '거래왕',
    coordinates: { lat: '37.123', lng: '127.123' },
    grade: 'one',
    town: '서초동',
  },
];

export const handlers = [
  rest.get('/oauth2/callback/google', (req, res, ctx) => {
    return res(
      ctx.set('Authorization', 'Baerer abcdefg12345'),
      ctx.set('refresh', 'testrefresh12345'),
      ctx.json({
        code: 200,
        message: '로그인 성공',
        isNew: false,
      })
    );
  }),

  rest.get('/oauth2/callback/kakao', (req, res, ctx) => {
    // 신규 유저일 경우
    return res(
      ctx.json({
        code: 200,
        message: '신규 유저',
        isNew: true,
        user: {
          auth_id: '123',
          nickname: '거래왕',
          profile_image:
            'https://static.wanted.co.kr/images/events/1633/f85834e9.jpg',
        },
      })
    );
  }),

  rest.get('/oauth2/callback/naver', (req, res, ctx) => {
    // 로그인 성공시
    return res(
      ctx.set('Authorization', 'Baerer abcdefg12345'),
      ctx.set('refresh', 'testrefresh12345'),
      ctx.json({
        code: 200,
        message: '로그인 성공',
        isNew: false,
      })
    );
  }),

  rest.get('/auth/user', (req, res, ctx) => {
    const user1 = 'abcdefg12345';
    const accessToken = req.headers.get('Authorization')?.split(' ')[1];
    const index = user1 === accessToken ? 0 : 1;
    console.log(users[index]);

    return res(
      ctx.json({
        code: 200,
        message: '유저 정보 조회 성공',
        user: users[index],
      })
    );
  }),

  rest.post('/auth/signup', async (req, res, ctx) => {
    const body = await req.json();
    const { nickname, coordinates, town, profileImg, profileImgFile } = body;
    users.push({
      id: '9910',
      nickname,
      profile_image: profileImg,
      coordinates,
      town,
      grade: 'one',
    });

    return res(
      ctx.set('Authorization', 'Baerer geggeg2'),
      ctx.set('refresh', 'testrefresh12345'),
      ctx.json({
        code: 200,
        message: '회원가입 성공',
      })
    );
  }),

  rest.post('/auth/nickname', async (req, res, ctx) => {
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
];
