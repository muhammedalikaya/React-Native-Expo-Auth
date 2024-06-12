import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  email: null,
  password: null,
  isLoading: false,
  user: {
    email: "test@test.com",
    password: "123456",
  },
  isAuth: false,
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
    setLogin: (state) => {
      if (
        state.email === state.user.email &&
        state.password === state.user.password
      ) {
        state.isAuth = true;
      } else {
        console.log("Wrong Email or Password");
        state.isAuth = false;
      }
    },
  },
});

export const { setName, setEmail, setPassword, setIsLoading, setLogin } =
  userSlice.actions;
export default userSlice.reducer;
