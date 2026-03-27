import { createMovieRepository } from "./movie.repo.js";
import { createMovieService } from "./movie.service.js";

export const createContext = (db: any) => {
  const movieCollection = db.collection("movies");
  const movieRepo = createMovieRepository(movieCollection);
  const movieService = createMovieService(movieRepo);

  return {
    services: {
      movieService,
    },
  };
};
