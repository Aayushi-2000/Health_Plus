import { createAsyncThunk } from "@reduxjs/toolkit";
import { EndPoints } from "../configue";
import axios from "axios";
const backendUrl = process.env.REACT_APP_PRODUCT_BACKEND_URL;

export const fetchProduct = createAsyncThunk("product/all", () => {
  const response = axios.get(`${backendUrl}${EndPoints.AllProducts}`);

  return response;
});

export const addProduct = createAsyncThunk("product/add", (payload) => {
  const response = axios.post(`${backendUrl}${EndPoints.AddProduct}`, payload);

  return response;
});
