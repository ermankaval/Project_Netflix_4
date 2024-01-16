// WishlistContext.js

import React, { createContext, useContext, useState } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [likedMoviesCount, setLikedMoviesCount] = useState(0); // Eklenen satır

  const addToWishlist = (movie) => {
    setSelectedMovies((prevSelectedMovies) => [...prevSelectedMovies, movie]);
    setLikedMoviesCount((prevCount) => prevCount + 1); // Eklenen satır
  };

  const removeFromWishlist = (movieId) => {
    setSelectedMovies((prevSelectedMovies) => prevSelectedMovies.filter((movie) => movie.id !== movieId));
    setLikedMoviesCount((prevCount) => prevCount - 1); // Eklenen satır
  };

  return (
    <WishlistContext.Provider value={{ selectedMovies, addToWishlist, removeFromWishlist, likedMoviesCount }}> {/* Eklenen satır */}
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
