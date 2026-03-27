import axios from "axios";

export const createTmdbRepo = (apiKey: string) => {
  const baseURL = "https://api.themoviedb.org/3";

  const api = axios.create({
    baseURL,
    params: { api_key: apiKey },
  });

  const getMovieById = async (movieID: number) => {
    const response = await api.get(`/movie/${movieID}`);
    return response.data;
  };

  return {
    getMoviesbyId: async (movieIDs: number[]) => {
      const promises = movieIDs.map((id) => getMovieById(id));
      const movies = await Promise.all(promises);
      return movies;
    },
  };
};
