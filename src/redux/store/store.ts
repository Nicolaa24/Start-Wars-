import { configureStore } from "@reduxjs/toolkit";
import { categoriesReducer } from '../slices/CategoriesSlice'
import { favoriteReducer } from '../slices/FavoriteSlice'
import { setLocalStorage } from "../../utils/service/localStorage";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    favorite: favoriteReducer
  }
});

store.subscribe(() => {
  setLocalStorage('store', store.getState().favorite)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;