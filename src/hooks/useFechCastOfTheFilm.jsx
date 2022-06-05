import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { movieCredits } from 'services/apiRequests';

export function useFechCastOfTheFilm() {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let { movieId } = useParams();

  useEffect(() => {
    async function getMovies() {
      setIsLoading(true);
      try {
        const cast = await movieCredits(movieId);
        setCast(cast.cast);
      } catch (error) {
        // setError(error);
        console.log(error.message, 'ERROR by useFechCastOfTheFilm');
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, [movieId]);

  return { cast, isLoading };
}
