export const fetchAllMovies = () => {
  return fetch(
    'https://rancid-tomatillos.herokuapp.com/api/v1/movies'
  ).then(response => response.json());
};
