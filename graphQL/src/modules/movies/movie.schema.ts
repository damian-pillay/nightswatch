export const movieTypeDefs = `#graphql
  type Movie {
    _id: ID!
    title: String!
    year: Int
    poster: String
  }

  type Query {
    movies: [Movie]
  }
`;

export interface MovieProjection {
  _id: 0 | 1;
  title: 0 | 1;
  year: 0 | 1;
  poster: 0 | 1;
}
