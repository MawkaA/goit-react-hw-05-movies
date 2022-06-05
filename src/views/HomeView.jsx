import { Box, Text } from '@chakra-ui/react';
import { useFetchTrendingFilms } from 'hooks';
import MoviesList from 'components/MoviesList/MoviesList';

function HomeView() {
  const { films, isLoading } = useFetchTrendingFilms();

  return (
    <Box p={5}>
      <Text fontSize="5xl">Trending today</Text>
      {isLoading && 'Loading...'}
      {!isLoading && <MoviesList films={films} route={'movies/'} />}
    </Box>
  );
}
export default HomeView;
