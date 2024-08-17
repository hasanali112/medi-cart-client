import { baseApi } from "./api/baseApi";
import cartReducer from "./features/cartSlice";

export const reducer = {
  cart: cartReducer,
  [baseApi.reducerPath]: baseApi.reducer,
};
