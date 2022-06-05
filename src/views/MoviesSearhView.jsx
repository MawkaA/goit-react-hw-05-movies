import { useEffect, useState } from 'react';
import { useSearchParams, Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { useFetchSearchMovieOnRequest } from 'hooks';
import SearchBar from 'components/SearchBar/SearchBar';
import MoviesList from 'components/MoviesList/MoviesList';

function MoviesSearchView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const { filmsBySearch, isLoading } =
    useFetchSearchMovieOnRequest(searchQuery);
  const currentSearchQuery = searchParams.get('query');

  useEffect(() => {
    if (currentSearchQuery) {
      setSearchQuery(currentSearchQuery);
    }
  }, [currentSearchQuery]);

  const searchHandler = query => {
    setSearchQuery(query);
    setSearchParams({ query: query });
  };

  return (
    <Box p={5}>
      <SearchBar searchHandler={searchHandler} />
      {isLoading && '...Loading'}
      {!isLoading && <MoviesList films={filmsBySearch} />}
      <Outlet />
    </Box>
  );
}
export default MoviesSearchView;
