import { configureStore } from "@reduxjs/toolkit";
import { categoriesReducer } from '../slices/CategoriesSlice'
import {favoriteReducer} from '../slices/FavoriteSlice'

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    favorite: favoriteReducer
  }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;