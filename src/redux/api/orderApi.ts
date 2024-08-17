import { baseApi } from "./baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createOrder: build.mutation({
      query: (data) => ({
        url: "/order/create-order",
        method: "post",
        body: data,
        responseHandler: (response: any) => {
          if (response.ok) {
            return { data: response.json() };
          } else {
            return { error: response.statusText };
          }
        },
      }),
      invalidatesTags: ["order"],
    }),
  }),
  overrideExisting: true,
});

export const { useCreateOrderMutation } = orderApi;
