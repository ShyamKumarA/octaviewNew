import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import URL from '../Constant';

// view pending packages, Action method where we call API,
export const adminProfileManage = createAsyncThunk('adminProfileManage', async() => {
    console.log("Reached here");
  const userData = localStorage.getItem("userInfo");
  const parsedUserData = JSON.parse(userData);
  const token = parsedUserData.access_token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
  };

  const response = await axios.get(`${URL}/api/user/view-user-profile`, config);
console.log("DAta",response);
  return response.data;
})

export const adminProfileManageSlice = createSlice({
  name: 'adminProfileManageSlice',
  initialState:{
    loading: false,
    data: null,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(adminProfileManage.pending, (state) => {
      state.loading = true;
      state.data = null;
      state.error = false;
    });
    builder.addCase(adminProfileManage.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = false;
    });
    builder.addCase(adminProfileManage.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.error = true;
    });
  },
});




export default  adminProfileManageSlice.reducer;



