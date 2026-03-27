import { GraphQLResolveInfo } from "graphql";
import { getProjection } from "../movies/movie.utils.js";

export const watchlistResolvers = {
  Query: {
    watchlists: async (
      _: any,
      __: any,
      context: any,
      info: GraphQLResolveInfo,
    ) => {
      return context.services.watchlistService.getWatchlist(
        getProjection(info),
      );
    },
  },
  Watchlist: {
    movies: async (watchlist: any, _: any, { services }: any) => {
      if (!watchlist.movies?.length) return [];
      return services.watchlistService.getMoviesForWatchlist(watchlist.movies);
    },
  },
};
