import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from '../../utils/service/api';

interface Characters {
  name: string;
  url: string;
}

interface initialStateCategories {
  characters: {
    items: Characters[];
    status: string;
  }
}

export const fetchCharacters = createAsyncThunk<{ data: Characters[] }>('characters/fetchCharacters',
  async () => {
  const res = await axios.get(`${BASE_URL}people`)
  const data:Characters[] = res.data.results;
  return { data };
}
)

const initialState:initialStateCategories = {
  characters: {
    items: [],
    status: 'Loading'
  }
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.characters.items = [];
        state.characters.status = 'Loading';
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.characters.items = action.payload.data;
        state.characters.status = 'Loaded';
      })
      .addCase(fetchCharacters.rejected, (state) => {
        state.characters.items = [];
        state.characters.status = 'Error';
      })
  }
});

export const categoriesReducer = categoriesSlice.reducer;
