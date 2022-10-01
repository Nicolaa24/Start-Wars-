import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getLocalStorage } from "../../utils/service/localStorage";


export interface oneItem {
  title: string | undefined;
  id: string | undefined;
  category: string
}

interface InitialState {
  favorites: oneItem[]
}

const initialState: InitialState = getLocalStorage('store')

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<oneItem>) => {
      state.favorites.push(action.payload)
    },
    removeItem: (state, action: PayloadAction< oneItem>) => {
      state.favorites = state.favorites.filter(item => item.category !==action.payload.category || item.id !== action.payload.id
      )
    }
  }
})

export const favoriteReducer = favoriteSlice.reducer;