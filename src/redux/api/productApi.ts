import { baseApi } from "./baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProduct: build.query({
      query: () => ({
        url: "/products",
        method: "get",
      }),
      providesTags: ["product"],
    }),
    getSingleProduct: build.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "get",
      }),
      providesTags: ["product"],
    }),
  }),
});

export const { useGetProductQuery, useGetSingleProductQuery } = productApi;
