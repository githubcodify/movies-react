import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { fetchEpisode, fetchCharacter } from '../services/rickAndMortyApi';
import { useDispatch, useSelector } from 'react-redux';
import { addCharacter, selectFavoriteCharacters } from '../redux/favoriteCharactersSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EpisodePage = () => {
  const { episodeId } = useParams();
  const [episode, setEpisode] = useState(null);
  const [loading, setLoading] = useState(true);
  const favoriteCharacters = useSelector(selectFavoriteCharacters);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const fetchEpisodeData = async () => {
      const data = await fetchEpisode(episodeId);
      setEpisode(data);
      setLoading(false);
    };

    fetchEpisodeData();
  }, [episodeId]);

  const handleAddToFavorites = async (characterId) => {
    if (favoriteCharacters.length >= 10) {
      toast.error('Favori karakter ekleme sayısını aştınız. Başka bir karakteri favorilerden çıkarmalısınız.');
    } else {
      const characterData = await fetchCharacter(characterId);
      if (characterData) {
        dispatch(addCharacter(characterData));
        toast.success(`${characterData.name} favorilere eklendi.`);
      } else {
        toast.error('Karakter bilgileri alınamadı.');
      }
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Episode Details</h2>
      {episode && (
        <div>
          <h3>{episode.name}</h3>
          <p>Air date: {episode.air_date}</p>
          <p>Episode code: {episode.episode}</p>
          <h4>Characters:</h4>
          <ul>
            {episode.characters.map((character, index) => (
              <li key={index}>
                {character.name}{' '}
                <button onClick={() => handleAddToFavorites(character.id)}>Add to Favorites</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EpisodePage;
