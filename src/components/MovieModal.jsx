import React from 'react';

const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg">
        <h2 className="font-bold text-xl">{movie.Title}</h2>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Ratings:</strong> {movie.Ratings.map(r => `${r.Source}: ${r.Value}`).join(', ')}</p>
        <button onClick={onClose} className="mt-4 bg-red-500 text-white p-2 rounded">Close</button>
      </div>
    </div>
  );
};

export default MovieModal;