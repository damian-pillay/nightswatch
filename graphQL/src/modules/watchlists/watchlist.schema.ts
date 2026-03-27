export const watchlistTypeDefs = `#graphql
  type Movie {
    id: Int!
    title: String
    overview: String
    poster_path: String
    release_date: String
  }

  type Watchlist {
    _id: ID!
    user: String!
    movies: [Movie]
  }

  type Query {
    watchlists: Watchlist
  }
`;

export interface WatchlistProjection {
  _id: 0 | 1;
  user: 0 | 1;
  movies: 0 | 1;
}
