import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [episodes, setEpisodes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    fetchEpisodes();
  }, [currentPage]);

  const fetchEpisodes = async () => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/episode?page=${currentPage}`);
      setEpisodes(response.data.results);
      setTotalPages(response.data.info.pages);
    } catch (error) {
      console.error('Error fetching episodes:', error);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (searchTerm) => {
    setCurrentPage(1);
    setSearchTerm(searchTerm);
  };

  return (
    <div>
      <h1>Rick and Morty Episodes</h1>

      <SearchBar onSearch={handleSearch} />

      {episodes.map((episode) => (
        <div key={episode.id}>
          <Link to={`/episode/${episode.id}`}>{episode.name}</Link>
          <p>{episode.episode}</p>
        </div>
      ))}

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default HomePage;
