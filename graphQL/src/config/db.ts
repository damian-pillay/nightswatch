import { MongoClient } from "mongodb";

export async function connectDb() {
  const client = new MongoClient(`${process.env.MONGO_CONNECTION_STRING}`);
  await client.connect();
  console.log("✅ Connected to MongoDB");

  return client.db(process.env.MONGO_DB_NAME);
}
