import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import URL from "../Constant";

// Redux action to get user
export const splitRoi = createAsyncThunk('splitRoi', async(percentage) => {
  
    const userData = localStorage.getItem("userInfo");
    const parsedUserData = JSON.parse(userData);
    const token = parsedUserData.access_token;
  
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
    };
    
    const response = await axios.post(`${URL}/api/admin/commission-split`,{percentage}, config);
  
    console.log(response);
    return response.data;
  
  })
  
  export const splitRoiSlice = createSlice({
    name: 'splitRoiSlice',
    initialState:{
      loading: false,
      data: null,
      error: false,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(splitRoi.pending, (state) => {
        state.loading = true;
        state.data = null;
        state.error = false;
      });
      builder.addCase(splitRoi.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = false;
      });
      builder.addCase(splitRoi.rejected, (state, action) => {
        console.log("Error", action.payload);
        state.error = true;
      });
    },
  });
  

  export default splitRoiSlice.reducer;

