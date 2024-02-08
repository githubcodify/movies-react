import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  characters: JSON.parse(localStorage.getItem('favoriteCharacters')) || [],
};

export const favoriteCharactersSlice = createSlice({
  name: 'favoriteCharacters',
  initialState,
  reducers: {
    addFavoriteCharacter: (state, action) => {
      if (state.characters.length < 10) {
        state.characters.push(action.payload);
        localStorage.setItem('favoriteCharacters', JSON.stringify(state.characters));
      }
    },
    removeCharacter: (state, action) => {
      state.characters = state.characters.filter(
        (character) => character.id !== action.payload
      );
      localStorage.setItem('favoriteCharacters', JSON.stringify(state.characters));
    },
  },
});

export const { addCharacter, removeCharacter } = favoriteCharactersSlice.actions;

export const selectFavoriteCharacters = (state) => state.favoriteCharacters.characters;

export default favoriteCharactersSlice.reducer;
