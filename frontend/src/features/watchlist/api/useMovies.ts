import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import type { Watchlist } from "../types";

const GET_MOVIES = gql`
  query GetMovies {
    watchlist {
      movies {
        title
        releaseDate
        poster
      }
    }
  }
`;

export function useMovies() {
  return useQuery<{ watchlist: Watchlist }>(GET_MOVIES);
}
