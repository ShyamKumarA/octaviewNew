import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import URL from '../Constant';

// view pending packages, Action method where we call API,
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

//Accept package slice
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
  
  const response = await axios.post(`${URL}/api/admin/user-package-approval/${id}`, {},config);

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


//reject package slice

export const Rejectpackage = createAsyncThunk('Rejectpackage', async(id) => {
  console.log(id);
  const userData = localStorage.getItem("userInfo");
  const parsedUserData = JSON.parse(userData);
  const token = parsedUserData.access_token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
  };
  const response = await axios.post(`${URL}api/admin/user-package-rejected/${id}`, {},config);

  console.log(response);
  return response.data;

})

export const rejectPackageSlice = createSlice({
  name: 'rejectPackageSlice',
  initialState:{
    loading: false,
    data: null,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(Rejectpackage.pending, (state) => {
      state.loading = true;
      state.data = null;
      state.error = false;
    });
    builder.addCase(Rejectpackage.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = false;
    });
    builder.addCase(Rejectpackage.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.error = true;
    });
  },
});

export const topupManage = createAsyncThunk('topupManage', async() => {
  const userData = localStorage.getItem("userInfo");
  const parsedUserData = JSON.parse(userData);
  const token = parsedUserData.access_token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
  };

  const response = await axios.get(`${URL}/api/admin/view-addFund-pending`, config);

  return response.data;
})

export const topupManageSlice = createSlice({
  name: 'topupManageSlice',
  initialState:{
    loading: false,
    data: null,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(topupManage.pending, (state) => {
      state.loading = true;
      state.data = null;
      state.error = false;
    });
    builder.addCase(topupManage.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = false;
    });
    builder.addCase(topupManage.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.error = true;
    });
  },
});

export const AcceptTopups = createAsyncThunk('AcceptTopups', async(id) => {
  
  const userData = localStorage.getItem("userInfo");
  const parsedUserData = JSON.parse(userData);
  const token = parsedUserData.access_token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
  };
  
  const response = await axios.post(`${URL}/api/admin/approve-addFund/${id}`, {},config);

  console.log(response);
  return response.data;

})

export const acceptTopupSlice = createSlice({
  name: 'acceptTopupSlice',
  initialState:{
    loading: false,
    data: null,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(AcceptTopups.pending, (state) => {
      state.loading = true;
      state.data = null;
      state.error = false;
    });
    builder.addCase(AcceptTopups.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = false;
    });
    builder.addCase(AcceptTopups.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.error = true;
    });
  },
});

// export const RejectTopups = createAsyncThunk('RejectTopups', async(id) => {
  
//   const userData = localStorage.getItem("userInfo");
//   const parsedUserData = JSON.parse(userData);
//   const token = parsedUserData.access_token;

//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "content-type": "application/json",
//     },
//   };
  
//   const response = await axios.post(`${URL}/api/admin/approve-addFund/${id}`, {},config);

//   console.log(response);
//   return response.data;

// })

// export const rejectTopupSlice = createSlice({
//   name: 'rejectTopupSlice',
//   initialState:{
//     loading: false,
//     data: null,
//     error: false,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(RejectTopups.pending, (state) => {
//       state.loading = true;
//       state.data = null;
//       state.error = false;
//     });
//     builder.addCase(RejectTopups.fulfilled, (state, action) => {
//       state.loading = false;
//       state.data = action.payload;
//       state.error = false;
//     });
//     builder.addCase(RejectTopups.rejected, (state, action) => {
//       console.log("Error", action.payload);
//       state.error = true;
//     });
//   },
// });


export const acceptPackageReducer = acceptPackageSlice.reducer;
export const rejectPackageReducer = rejectPackageSlice.reducer;
export const packageManageReducer = packageManageSlice.reducer;
export const acceptTopupReducer = acceptTopupSlice.reducer;
export const topupManageReducer = topupManageSlice.reducer;
// export const rejectTopupReducer = rejectTopupSlice.reducer;


