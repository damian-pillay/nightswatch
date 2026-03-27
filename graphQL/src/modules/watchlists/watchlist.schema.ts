export const watchlistTypeDefs = `#graphql
  type TMDBMovie {
    id: Int!
    title: String
    overview: String
    poster_path: String
    release_date: String
  }

  type Watchlist {
    _id: ID!
    user: String!
    movies: [TMDBMovie]
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
