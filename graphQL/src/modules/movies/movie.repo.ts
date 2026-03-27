import { Collection, Document } from "mongodb";
import { MovieProjection } from "./movie.schema";

export const createMovieRepository = (collection: Collection<Document>) => ({
  getAll: async (projection?: MovieProjection) => {
    const allMovies = await collection
      .find({})
      .project(projection ?? {})
      .toArray();

    return allMovies;
  },
});
