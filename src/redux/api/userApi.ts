import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query({
      query: () => ({
        url: "/user/users",
        method: "get",
      }),
      providesTags: ["users"],
    }),
  }),
});

export const { useGetUserQuery } = userApi;
