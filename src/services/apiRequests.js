import axios from 'axios';

export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const APi_KEY = '3ad51e66d51ec411a49503416d7a2142';

export async function getTrending() {
  const response = await axios.get(`/trending/all/week?api_key=${APi_KEY}`);
  return response.data.results;
}

export async function searchMovies(query) {
  const response = await axios.get(
    `/search/movie?api_key=${APi_KEY}&language=en-US&page=1&query=${query}&include_adult=true`
  );
  return response.data;
}

export async function movieDetails(movieId) {
  const response = await axios.get(
    `/movie/${movieId}?api_key=${APi_KEY}&language=en-US`
  );
  return response.data;
}

export async function movieCredits(movieId) {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${APi_KEY}&language=en-US`
  );
  return response.data;
}

export async function movieReviews(movieId) {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${APi_KEY}&language=en-US&page=1`
  );
  return response.data;
}
