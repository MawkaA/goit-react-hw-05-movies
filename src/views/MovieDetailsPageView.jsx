import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useFetchDetailsOneFilm } from 'hooks';
import { Box, Text, Button, Image, Flex, Center } from '@chakra-ui/react';
import { IMAGE_URL } from 'services/apiRequests';

function MovieDetailsPageView() {
  const { filmDetails, isLoading } = useFetchDetailsOneFilm();
  const {
    name,
    title,
    poster_path,
    release_date = '2022-00-00',
    vote_average,
    overview,
    genres = [
      {
        id: 1,
        name: '',
      },
    ],
  } = filmDetails;

  let navigate = useNavigate();
  let location = useLocation();

  const goBack = () => {
    navigate(location?.state?.from || '/');
  };

  return (
    <Box p={4}>
      <Box mb="10">
        <Button colorScheme="gray" type="button" onClick={goBack}>
          Go Back
        </Button>
      </Box>
      {isLoading && 'Loading...'}
      <Flex>
        {!isLoading && (
          <Box mr="7" minW="15rem">
            <Image
              src={
                poster_path
                  ? `${IMAGE_URL + poster_path}`
                  : `https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg`
              }
              alt={title ?? name}
              borderRadius="lg"
            />
          </Box>
        )}
        {!isLoading && (
          <Box>
            <Text fontSize="3xl" fontWeight="700">
              {title} {release_date.slice(0, 4)}
            </Text>
            <Text fontWeight="700">User Score:</Text>
            <Text> {vote_average}</Text>
            <Text fontWeight="700">Overview:</Text>
            <Text> {overview}</Text>
            <Text fontWeight="700">Ganres:</Text>
            {genres.map(ganre => (
              <Text key={ganre.id}>{ganre.name}</Text>
            ))}
          </Box>
        )}
      </Flex>
      <Center>
        <Text
          as={NavLink}
          to="cast"
          state={location.state}
          mr="20"
          fontSize="4xl"
        >
          Cast
        </Text>
        <Text
          as={NavLink}
          to="reviews"
          state={location.state}
          mr="20"
          fontSize="4xl"
        >
          Reviews
        </Text>
      </Center>

      <Outlet />
    </Box>
  );
}

export default MovieDetailsPageView;
