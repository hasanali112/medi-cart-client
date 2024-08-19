import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [] as any,
  selectedItem: 0,
  totalPrice: 0,
  taxRate: 0.1,
  gradTotal: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isExisting = state.products.find(
        (product: any) => product.id === action.payload._id
      );
      if (!isExisting) {
        state.products.push(action.payload);
      }
      state.selectedItem = state.products.reduce(
        (total: number, product: any) => {
          return Number(total + product.quantity);
        },
        0
      );
      state.totalPrice = state.products.reduce(
        (total: number, product: any) => {
          return Number(total + product.quantity * product.price);
        },
        0
      );
      state.gradTotal = state.totalPrice + state.totalPrice * state.taxRate;
    },
    clearCart: (state) => {
      state.products = [];
      state.selectedItem = 0;
      state.totalPrice = 0;
      state.gradTotal = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
