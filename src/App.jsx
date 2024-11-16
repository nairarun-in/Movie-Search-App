import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import './styles.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = async () => {
    const response = await fetch(`http://www.omdbapi.com/?s=popular&apikey=http://www.omdbapi.com/?i=tt3896198&apikey=bdb8ee95`);
    const data = await response.json();
    setMovies(data.Search || []);
  };

  const handleSearch = async (term) => {
    setSearchTerm(term);
    const response = await fetch(`http://www.omdbapi.com/?s=${term}&apikey=bdb8ee95`);
    const data = await response.json();
    setMovies(data.Search || []);
  };

  return (
    <div className="container mx-auto p-4">
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;