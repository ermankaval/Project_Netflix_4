import React, { useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { useWishlist } from './WishlistContext';

const Thumbnail = ({ movie }) => {
  const { selectedMovies, addToWishlist, removeFromWishlist } = useWishlist();
  const isMovieInWishlist = selectedMovies.some((selectedMovie) => selectedMovie.id === movie.id);

  const handleThumbnailClick = useCallback(() => {
    // Eğer resmin üzerine tıklanınca yapılacak bir işlem varsa burada tanımlanabilir.
    // Örneğin, film detay sayfasına yönlendirme gibi.
  }, []);

  const handleHeartClick = useCallback(() => {
    if (isMovieInWishlist) {
      removeFromWishlist(movie.id);
    } else {
      addToWishlist(movie);
    }
  }, [isMovieInWishlist, addToWishlist, removeFromWishlist, movie]);

  return (
    <div className={`relative h-28 min-w-[180px] ...`} onClick={handleThumbnailClick}>
      <div className="right-3 top-3 absolute z-10">
        <button type="button" variant="outline" size="icon" onClick={handleHeartClick}>
          <Heart
            className={`w-5 h-5 ${isMovieInWishlist ? 'text-red-500' : 'text-white'}`}
          />
        </button>
      </div>
      <div className="relative h-full w-full">
        <Link href={`/${movie.id}`} passHref>
          <div onClick={handleThumbnailClick}>
            <Image
              src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path || movie.poster_path}`}
              className="rounded-sm object-cover md:rounded w-full h-full"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="movie poster"
            />
          </div>
        </Link>
        <p className="text-white absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-center opacity-0 hover:opacity-100 transition-opacity">
          {movie.title}
        </p>
      </div>
    </div>
  );
};

export default Thumbnail;
