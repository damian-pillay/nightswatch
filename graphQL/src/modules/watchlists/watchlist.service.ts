import { createTmdbRepo } from "../shared/tmdb.repo.js";
import { createWatchlistRepo } from "./watchlist.repo.js";

export const createWatchlistService = (
  watchlistRepo: ReturnType<typeof createWatchlistRepo>,
  tmdbRepo: ReturnType<typeof createTmdbRepo>,
) => ({
  getWatchlist: async () => {
    const document = await watchlistRepo.getWatchlist();
    return document;
  },

  getMoviesForWatchlist: async (movieIDs: number[]) => {
    if (!movieIDs?.length) return [];
    return await tmdbRepo.getMoviesbyId(movieIDs);
  },
});
