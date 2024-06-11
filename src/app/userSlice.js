import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  email: null,
  password: null,
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setName, setEmail, setPassword, setIsLoading } =
  userSlice.actions;
export default userSlice.reducer;
