import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import type { Movie } from "../types";

const GET_MOVIES = gql`
  query GetMovies {
    movies {
      _id
      title
      year
      poster
    }
  }
`;

export function useMovies() {
  return useQuery<{ movies: Movie[] }>(GET_MOVIES);
}
