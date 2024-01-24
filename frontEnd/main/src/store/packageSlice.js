import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import URL from '../Constant';

// Action method where we call API
export const packageManage = createAsyncThunk('packageManage', async() => {
  const userData = localStorage.getItem("userInfo");
  const parsedUserData = JSON.parse(userData);
  const token = parsedUserData.access_token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
  };

  const response = await axios.get(`${URL}/api/admin/view-addPackageFund-pending`, config);

  console.log(response.data);
  return response.data;
})

export const packageManageSlice = createSlice({
  name: 'packageManageSlice',
  initialState:{
    loading: false,
    data: null,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(packageManage.pending, (state) => {
      state.loading = true;
      state.data = null;
      state.error = false;
    });
    builder.addCase(packageManage.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = false;
    });
    builder.addCase(packageManage.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.error = true;
    });
  },
});

export const Acceptpackage = createAsyncThunk('Acceptpackage', async(id) => {
  
  const userData = localStorage.getItem("userInfo");
  const parsedUserData = JSON.parse(userData);
  const token = parsedUserData.access_token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
  };
  
  const response = await axios.post(`${URL}/api/admin/user-package-approval/${id}`, config);

  console.log(response);
  return response.data;

})

export const acceptPackageSlice = createSlice({
  name: 'acceptPackageSlice',
  initialState:{
    loading: false,
    data: null,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(Acceptpackage.pending, (state) => {
      state.loading = true;
      state.data = null;
      state.error = false;
    });
    builder.addCase(Acceptpackage.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = false;
    });
    builder.addCase(Acceptpackage.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.error = true;
    });
  },
});


export const acceptPackageReducer = acceptPackageSlice.reducer;
export const packageManageReducer = packageManageSlice.reducer;