import { rest } from 'msw';

export const handlers = [
  rest.post('/api/login', (req, res, ctx) => {
    return res(
      ctx.json({
        user: {
          id: '123',
          name: 'Test User',
          email: 'test@example.com',
        },
        token: 'abcdefg12345',
      })
    );
  }),
];