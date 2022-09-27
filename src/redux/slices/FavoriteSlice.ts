import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface oneItem {
  title: string | undefined;
  img: string | undefined;
}

interface InitialState {
  favorites: oneItem[]
}

const initialState: InitialState = {
  favorites: []
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addItem: (state, action:PayloadAction<oneItem>) => {
      state.favorites.push(action.payload)
    }
  }
})

export const favoriteReducer = favoriteSlice.reducer;