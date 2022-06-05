import { useEffect, useState } from 'react';
import { getTrending } from '../services/apiRequests';

export function useFetchTrendingFilms() {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getMovies() {
      setIsLoading(true);
      try {
        const trendingFilms = await getTrending();
        setFilms(trendingFilms);
      } catch (error) {
        // setError(error);
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, []);

  return { films, isLoading };
}
