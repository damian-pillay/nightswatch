import { createMovieRepository } from "./movie.repo";
import { MovieProjection } from "./movie.schema";

export const createMovieService = (
  movieRepo: ReturnType<typeof createMovieRepository>,
) => ({
  getMovies: async (projection: MovieProjection) =>
    movieRepo.getAll(projection),
});
