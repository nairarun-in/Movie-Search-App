import React from 'react';

const MovieList = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {movies.map(movie => (
        <div 
          key={movie.imdbID} 
          className="flex items-center border border-gray-600 bg-gray-800 p-4 rounded hover:bg-gray-700 transition" // Flexbox and hover effect
        >
          <img 
            src={movie.Poster} 
            alt={movie.Title} 
            className="w-32 h-auto rounded mr-4" // Image size and margin
          />
          <div>
            <h2 className="font-bold text-xl text-white">{movie.Title}</h2>
            <p className="text-gray-400">Release Year: {movie.Year}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;