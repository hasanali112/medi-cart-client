import { baseApi } from "./baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createProduct: build.mutation({
      query: (data) => ({
        url: "/products/create-product",
        method: "POST",
        contentType: "application/json",
        data,
      }),
      invalidatesTags: ["product"],
    }),
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

export const {
  useCreateProductMutation,
  useGetProductQuery,
  useGetSingleProductQuery,
} = productApi;
