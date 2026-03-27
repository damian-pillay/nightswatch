import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { config } from "dotenv";
import { connectDb } from "./config/db.js";
import { movieTypeDefs } from "./modules/movies/movie.schema.js";
import { movieResolvers } from "./modules/movies/movie.resolvers.js";
import { createContext } from "./context.js";
import { watchlistTypeDefs } from "./modules/watchlists/watchlist.schema.js";
import { watchlistResolvers } from "./modules/watchlists/watchlist.resolvers.js";

config();

const db = await connectDb();

const server = new ApolloServer({
  typeDefs: [movieTypeDefs, watchlistTypeDefs],
  resolvers: [movieResolvers, watchlistResolvers],
});

const { url } = await startStandaloneServer(server, {
  context: async () => createContext(db),
  listen: { port: 4000 },
});

console.log(`Server ready at: ${url}`);
