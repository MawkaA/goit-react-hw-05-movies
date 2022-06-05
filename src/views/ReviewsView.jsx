import React from 'react';
import { useFatchReviewsOfTheFilm } from 'hooks';
import { Text, UnorderedList, ListItem } from '@chakra-ui/react';

function ReviewsView() {
  const { review, isLoading } = useFatchReviewsOfTheFilm();

  return (
    <>
      {isLoading && '...Loading'}
      {review.length !== 0 ? (
        <UnorderedList spacing={3}>
          {review.map(({ id, author, content }) => (
            <ListItem key={id}>
              <Text as="h2" fontWeight={700}>
                Author: {author}
              </Text>
              <Text as="p">{content}</Text>
            </ListItem>
          ))}
        </UnorderedList>
      ) : (
        <Text fontSize="6xl">No Reviews ¯\_(ツ)_/¯</Text>
      )}
    </>
  );
}
export default ReviewsView;
