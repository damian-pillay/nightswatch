import axios from "axios";
import { getPosterURL } from "./movie.utils.js";

export const createMovieRepo = (apiKey: string) => {
  const baseURL = "https://api.themoviedb.org/3";

  const api = axios.create({
    baseURL,
    params: { api_key: apiKey },
  });

  const getMovieById = async (movieID: number) => {
    const response = await api.get(`/movie/${movieID}`);
    const movie = response.data;

    return {
      ...movie,
      poster_path: getPosterURL(movie.poster_path),
    };
  };

  return {
    getMoviesbyId: async (movieIDs: number[]) => {
      const promises = movieIDs.map((id) => getMovieById(id));
      const movies = await Promise.all(promises);
      return movies;
    },
  };
};
