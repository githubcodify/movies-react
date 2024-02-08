import { combineReducers } from '@reduxjs/toolkit';
import favoriteCharactersReducer from './favoriteCharactersSlice';

const rootReducer = combineReducers({
  favoriteCharacters: favoriteCharactersReducer
});

export default rootReducer;
