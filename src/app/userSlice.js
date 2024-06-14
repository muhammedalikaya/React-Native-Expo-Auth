import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Firebase Auth ile verileri userCredential.user objesine atıyoruz.
export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }) => {
    try {
      const auth = getAuth(); // get the auth object
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const token = user.stsTokenManager.accessToken;

      const userData = {
        token,
        user: user,
      };

      return userData;
    } catch (error) {
      console.log("userSlice.js 25 line error: ", error);
      throw error;
    }
  }
);

// Initial State
const initialState = {
  name: null,
  email: null,
  password: null,
  isLoading: false,
  isAuth: false,
  token: null,
  user: null,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload.toLowerCase();
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuth = true;
        state.user = action.payload.user; //login fonksiyonundan gelen user
        state.token = action.payload.token; // login fonksiyonundan gelen token
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuth = false;
        state.error = action.error.message; // login başarısız olursa hata mesajını state'e atıyoruz.
      });
  },
});

export const { setName, setEmail, setPassword, setIsLoading } =
  userSlice.actions;
export default userSlice.reducer;
