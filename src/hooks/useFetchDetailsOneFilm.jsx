import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { movieDetails } from 'services/apiRequests';

export function useFetchDetailsOneFilm() {
  const [filmDetails, setFilm] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let { movieId } = useParams();

  useEffect(() => {
    async function getMovie() {
      setIsLoading(true);
      try {
        const movieData = await movieDetails(movieId);
        setFilm(movieData);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getMovie();
  }, [movieId]);

  return { filmDetails, isLoading };
}
