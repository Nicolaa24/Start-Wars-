import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from '../../utils/service/api';

export interface Characters {
  name?: string;
  title?:string
  url: string;
}

export interface initialStateCategories {
  characters: {
    currentPage: number
    items: Characters[];
    status: string;
  }
}

const initialState:initialStateCategories = {
  characters: {
    items: [],
    status: 'Loading',
    currentPage: 1
  }
}

export const fetchCharacters = createAsyncThunk<{ data: Characters[]}, {page:number, category:string}>('characters/fetchCharacters',
  async({page, category}) => {
  const res = await axios.get(`${BASE_URL}${category}/?page=${page}`)
  const data:Characters[] = res.data.results;
  return { data};
}
)

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCurrentPage(state, action:PayloadAction<number>) {
      state.characters.currentPage = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.characters.items = [];
        state.characters.status = 'Loading';
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.characters.items = action.payload.data ;
        state.characters.status = 'Loaded';
      })
      .addCase(fetchCharacters.rejected, (state) => {
        state.characters.items = [];
        state.characters.status = 'Error';
      })
  }
});

export const categoriesReducer = categoriesSlice.reducer;
