import Redis from "ioredis";

export async function connectRedis() {
  const client = new Redis(`${process.env.REDIS_CONNECTION_STRING}`);

  console.log("✅ Connected to Redis");

  return client;
}
