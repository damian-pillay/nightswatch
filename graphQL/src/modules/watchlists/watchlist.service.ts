import { createMovieRepo } from "../shared/movies/movie.repo.js";
import { createWatchlistRepo } from "./watchlist.repo.js";
import { WatchlistProjection } from "./watchlist.schema.js";

export const createWatchlistService = (
  watchlistRepo: ReturnType<typeof createWatchlistRepo>,
  movieRepo: ReturnType<typeof createMovieRepo>,
) => ({
  getWatchlist: async (projection?: WatchlistProjection) => {
    const document = await watchlistRepo.getWatchlist(projection);
    return document;
  },

  getMoviesForWatchlist: async (movieIDs: number[]) => {
    if (!movieIDs?.length) return [];
    return await movieRepo.getMoviesbyId(movieIDs);
  },
});
