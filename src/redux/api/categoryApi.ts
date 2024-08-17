import { baseApi } from "./baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createCategory: build.mutation({
      query: (data) => ({
        url: "/categories/create-category",
        method: "POST",
        contentType: "application/json",
        data,
      }),
      invalidatesTags: ["category"],
    }),
    getCategory: build.query({
      query: () => ({
        url: "/categories",
        method: "GET",
      }),
      providesTags: ["category"],
    }),
  }),
});

export const { useCreateCategoryMutation, useGetCategoryQuery } = categoryApi;
