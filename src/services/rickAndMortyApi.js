import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const fetchEpisodes = async (page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/episode?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching episodes:', error);
    return null;
  }
};

export const fetchEpisode = async (episodeId) => {
  try {
    const response = await axios.get(`${BASE_URL}/episode/${episodeId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching episode ${episodeId}:`, error);
    return null;
  }
};

export const fetchCharacter = async (characterId) => {
  try {
    const response = await axios.get(`${BASE_URL}/character/${characterId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching character ${characterId}:`, error);
    return null;
  }
};
