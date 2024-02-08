import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFavoriteCharacters, removeCharacter } from '../redux/favoriteCharactersSlice';

const FavoritesPage = () => {
  const favoriteCharacters = useSelector(selectFavoriteCharacters);
  const dispatch = useDispatch();

  const handleRemoveCharacter = (characterId, characterName) => {
    const confirmation = window.confirm(`${characterName} isimli karakteri favorilerden kaldırmak istediğinize emin misiniz?`);
    if (confirmation) {
      dispatch(removeCharacter(characterId));
    }
  };

  return (
    <div>
      <h2>Favorite Characters</h2>
      <ul>
        {favoriteCharacters.map((character) => (
          <li key={character.id}>
            {character.name}
            <button onClick={() => handleRemoveCharacter(character.id, character.name)}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;
