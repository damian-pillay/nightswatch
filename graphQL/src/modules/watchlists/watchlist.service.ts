import { createMovieRepo } from "../shared/movie.repo.js";
import { createWatchlistRepo } from "./watchlist.repo.js";

export const createWatchlistService = (
  watchlistRepo: ReturnType<typeof createWatchlistRepo>,
  movieRepo: ReturnType<typeof createMovieRepo>,
) => ({
  getWatchlist: async () => {
    const document = await watchlistRepo.getWatchlist();
    return document;
  },

  getMoviesForWatchlist: async (movieIDs: number[]) => {
    if (!movieIDs?.length) return [];
    return await movieRepo.getMoviesbyId(movieIDs);
  },
});
