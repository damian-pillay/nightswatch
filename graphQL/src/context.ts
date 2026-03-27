import { createMovieRepository } from "./modules/movies/movie.repo.js";
import { createMovieService } from "./modules/movies/movie.service.js";
import { createTmdbRepo } from "./modules/shared/tmdb.repo.js";
import { createWatchlistRepo } from "./modules/watchlists/watchlist.repo.js";
import { createWatchlistService } from "./modules/watchlists/watchlist.service.js";

export const createContext = (db: any) => {
  const movieCollection = db.collection("movies");
  const movieRepo = createMovieRepository(movieCollection);
  const movieService = createMovieService(movieRepo);

  const tmdbRepo = createTmdbRepo(process.env.TMDB_API_KEY!);
  const watchlistCollection = db.collection("watchlists");
  const watchlistRepo = createWatchlistRepo(watchlistCollection);
  const watchlistService = createWatchlistService(watchlistRepo, tmdbRepo);

  return {
    services: {
      movieService,
      watchlistService,
    },
  };
};
