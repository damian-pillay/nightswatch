import { createMovieRepo } from "./modules/shared/movies/movie.repo.js";
import { createWatchlistRepo } from "./modules/watchlists/watchlist.repo.js";
import { createWatchlistService } from "./modules/watchlists/watchlist.service.js";

export const createContext = (db: any, redis: any) => {
  const movieRepo = createMovieRepo(process.env.TMDB_API_KEY!);

  const watchlistCollection = db.collection("watchlists");
  const watchlistRepo = createWatchlistRepo(watchlistCollection);
  const watchlistService = createWatchlistService(watchlistRepo, movieRepo);

  return {
    services: {
      watchlistService,
    },
  };
};
