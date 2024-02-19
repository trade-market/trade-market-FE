import { apiSlice } from '@store/api/apiSlice';

const HTTP_STATUS_OK = 200;

export const postApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createPost: builder.mutation({
      query: ({ code }) => ({
        url: `v1/posts/?authorizationCode=${code}&env=${
          import.meta.env.DEV ? 'dev' : 'prod'
        }`,
        method: 'POST',
      }),
      transformResponse: (response, meta: { response: Response }) => {
        return response;
      },
    }),
  }),
});

export const { useCreatePostMutation } = postApiSlice;
