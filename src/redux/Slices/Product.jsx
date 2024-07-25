import { createSlice } from "@reduxjs/toolkit";
import { addProduct, fetchProduct } from "../../services/Product";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload?.data?.data;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.data.push(action.payload?.data?.data[0]);
      });
  },
});

export default productSlice.reducer;
