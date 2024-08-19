import { baseApi } from "./baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createOrder: build.mutation({
      query: (data) => ({
        url: "/order/create-order",
        method: "POST",
        contentType: "application/json",
        data,
      }),
      invalidatesTags: ["order"],
    }),
  }),
});

export const { useCreateOrderMutation } = orderApi;
