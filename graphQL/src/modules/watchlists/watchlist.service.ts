import { createWatchlistRepo } from "./watchlist.repo.js";
import { WatchlistProjection } from "./watchlist.schema.js";

export const createWatchlistService = (
  watchlistRepo: ReturnType<typeof createWatchlistRepo>,
) => ({
  getWatchlist: async (projection: WatchlistProjection) =>
    watchlistRepo.getWatchlist(projection),
});
