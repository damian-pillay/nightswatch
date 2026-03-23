import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { MongoClient } from "mongodb";
import { config } from "dotenv";
config();

const client = new MongoClient(`${process.env.MONGO_CONNECTION_STRING}`);
await client.connect();

console.log("✅ Connected to MongoDB");

const db = client.db(process.env.MONGO_DB_NAME);
const moviesCollection = db.collection("movies");

const typeDefs = `#graphql
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

const resolvers = {
  Query: {
    movies: async () => {
      return await moviesCollection.find({}).toArray();
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
