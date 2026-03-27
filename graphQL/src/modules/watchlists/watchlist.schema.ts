export const watchlistTypeDefs = `#graphql
  type Watchlist {
    _id: ID!
    user: String!
    movies: [Int]
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
