import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  token: null,
  id: null,
  userName: null,
  isLogined: false
}

const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUser(state,action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.userName = action.payload.userName;
      state.isLogined = action.payload
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
      state.userName = null;
      state.isLogined = false
    }
  }
})

export const { setUser, removeUser } = userSlice.actions;

export const userReducer = userSlice.reducer;