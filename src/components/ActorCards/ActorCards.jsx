import React from 'react';
import { IMAGE_URL } from 'services/apiRequests';
import { Box, Text, Image } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function ActorCards({ profile_path, name, character }) {
  return (
    <Box>
      <Box>
        <Image
          height="250px"
          src={
            profile_path
              ? `${IMAGE_URL + profile_path}`
              : `https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg`
          }
          alt={name}
        />
      </Box>
      <Text fontWeight="700">{name}</Text>
      <Text>{character}</Text>
    </Box>
  );
}

export default ActorCards;

ActorCards.propTypes = {
  profile_path: PropTypes.string,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};
