import { addFavoriteCharacter, removeFavoriteCharacter } from '../reducers/favoriteCharactersSlice'; 

export const addToFavorites = (character) => {
  return (dispatch) => {
    dispatch(addFavoriteCharacter(character));
  };
};

export const removeFromFavorites = (characterId) => {
  return (dispatch) => {
    dispatch(removeFavoriteCharacter(characterId));
  };
};
