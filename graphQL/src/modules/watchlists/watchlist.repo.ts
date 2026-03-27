import { Collection, Document } from "mongodb";
import { WatchlistProjection } from "./watchlist.schema";

export const createWatchlistRepo = (collection: Collection<Document>) => ({
  getWatchlist: async (projection?: WatchlistProjection) => {
    const watchlist = await collection.findOne(
      { user: "admin" },
      { projection: projection ?? {} },
    );

    return watchlist;
  },
});
