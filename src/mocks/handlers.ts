import { rest } from 'msw';

export const handlers = [
  rest.get('/oauth2/callback/google', (req, res, ctx) => {
    return res(
      ctx.set('Authorization', 'Baerer abcdefg12345'),
      ctx.set('refresh', 'testrefresh12345'),
      ctx.json({
        code: 200,
        message: '로그인 성공',
        isNew: false,
        user: {
          id: '123',
          nickname: '거래왕',
          coordinate: { lat: '37.123456', lng: '127.123456' },
          grade: 'one',
          town: '경기도 수원시 화서동',
        },
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
        user: {
          id: '123',
          nickname: '거래왕',
          coordinate: { lat: '37.123456', lng: '127.123456' },
          grade: 'one',
          town: '경기도 수원시 화서동',
        },
      })
    );
  }),

  rest.post('/auth/token', (req, res, ctx) => {
    return res(ctx.set('Authorization', 'Baerer newtoken123124'));
  }),

  rest.post('/auth/signup', async (req, res, ctx) => {
    const body = await req.json();
    const { nickname, id, coordinates, town } = body;

    return res(
      ctx.set('Authorization', 'Baerer abcdefg12345'),
      ctx.set('refresh', 'testrefresh12345'),
      ctx.json({
        code: 200,
        message: '로그인 성공',
        isNew: false,
        user: {
          id,
          nickname,
          coordinates,
          grade: 'one',
          town,
        },
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
