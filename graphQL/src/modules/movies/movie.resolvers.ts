import { GraphQLResolveInfo } from "graphql";
import { getProjection } from "./movie.utils.js";

export const movieResolvers = {
  Query: {
    movies: async (_: any, __: any, context: any, info: GraphQLResolveInfo) => {
      return context.services.movieService.getMovies(getProjection(info));
    },
  },
};
