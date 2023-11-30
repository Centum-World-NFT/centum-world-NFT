import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signUpAPI } from "../apis/authAPI";
import { signInAPI } from "../apis/authAPI";

export const signUp = createAsyncThunk("auth/signUp", async (payload) => {
  try {
    const response = await signUpAPI(payload);
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
});

export const signIn = createAsyncThunk("auth/signIn", async (payload) => {
  try {
    const response = await signInAPI(payload);
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
});

const initialState = {
  isLoading: false,
  data: null,
  isError: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
        state.data = null;
        state.isError = false;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.isError = false;
        localStorage.setItem("access_token", action.payload.token);
        localStorage.setItem("userID", action.payload.data._id);
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        console.log("Error", action.error.message);
        state.isError = true;
      })

      // login
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
        state.data = null;
        state.isError = false;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.isError = false;
        localStorage.setItem("access_token", action.payload.token);
        localStorage.setItem("userID", action.payload.data._id);
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoading = false;
        console.log("Error", action.error.message);
        state.isError = true;
      });
  },
});

export default authSlice.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signUpAPI } from "../apis/authAPI";
// import { signInAPI } from "../apis/authAPI";

export const signUp = createAsyncThunk("auth/signUp", async (payload) => {
  try {
    const response = await signUpAPI(payload);
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
});

// export const signIn = createAsyncThunk("auth/signIn", async (payload) => {
//   try {
//     const response = await signInAPI(payload);
//     return response.data;
//   } catch (error) {
//     console.log(error.message);
//     throw error;
//   }
// });

const initialState = {
  isLoading: false,
  data: null,
  isError: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
        state.data = null;
        state.isError = false;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.isError = false;
        localStorage.setItem("access_token", action.payload.token);
        localStorage.setItem("userID", action.payload.data._id);
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        console.log("Error", action.error.message);
        state.isError = true;
      });

    // login
    // .addCase(signIn.pending, (state) => {
    //   state.isLoading = true;
    //   state.data = null;
    //   state.isError = false;
    // })
    // .addCase(signIn.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.data = action.payload;
    //   state.isError = false;
    //   localStorage.setItem("access_token", action.payload.token);
    //   localStorage.setItem("userID", action.payload.data._id);
    // })
    // .addCase(signIn.rejected, (state, action) => {
    //   state.isLoading = false;
    //   console.log("Error", action.error.message);
    //   state.isError = true;
    // });
  },
});

export default authSlice.reducer;
