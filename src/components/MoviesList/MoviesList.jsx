import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import MovieCards from 'components/MovieCards/MovieCards';

function MoviesList({ films, route }) {
  return (
    <SimpleGrid minChildWidth="280px" spacing="50px">
      {films.map(film => {
        return <MovieCards key={film.id} film={film} route={route} />;
      })}
    </SimpleGrid>
  );
}
export default MoviesList;

MoviesList.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
  route: PropTypes.string,
};
