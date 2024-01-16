import React from 'react';
import { useWishlist } from '../components/WishlistContext';
import Navbar from '@/components/Navbar';
import Thumbnail from '../components/Thumbnail';

const MyList = () => {
  const { selectedMovies } = useWishlist();

  return (
    <div className="mt-16 px-4">
      <Navbar />
      <h1 className="text-2xl font-bold mb-4">My List</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {selectedMovies.map((movie) => (
          <Thumbnail key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MyList;
