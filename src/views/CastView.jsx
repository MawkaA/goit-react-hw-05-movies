import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import { useFechCastOfTheFilm } from 'hooks';
import ActorCards from 'components/ActorCards/ActorCards';

function CastView() {
  const { cast, isLoading } = useFechCastOfTheFilm();

  return (
    <>
      {!isLoading && (
        <SimpleGrid minChildWidth="250px" spacing="30px">
          {cast.map(({ cast_id, profile_path, name, character }) => (
            <ActorCards
              key={cast_id}
              profile_path={profile_path}
              name={name}
              character={character}
            />
          ))}
        </SimpleGrid>
      )}
    </>
  );
}
export default CastView;
