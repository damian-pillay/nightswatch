import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { config } from "dotenv";
import { connectDb } from "./config/db.js";
import { movieTypeDefs } from "./modules/movies/movie.schema.js";
import { movieResolvers } from "./modules/movies/movie.resolvers.js";
import { createContext } from "./modules/movies/movie.context.js";

config();

const db = await connectDb();

const server = new ApolloServer({
  typeDefs: [movieTypeDefs],
  resolvers: [movieResolvers],
});

const { url } = await startStandaloneServer(server, {
  context: async () => createContext(db),
  listen: { port: 4000 },
});

console.log(`Server ready at: ${url}`);
