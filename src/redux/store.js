import { configureStore } from '@reduxjs/toolkit';
import favoriteCharactersReducer from './favoriteCharactersSlice';

export const store = configureStore({
  reducer: {
    favoriteCharacters: favoriteCharactersReducer,
  },
});
