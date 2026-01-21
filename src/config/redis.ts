import Redis from "ioredis";
import "dotenv/config";

const redisUrl = process.env.REDIS_URL || "redis://localhost:6379";
export const redis = new Redis(redisUrl);

export async function connect() {
  try {
    await redis.set("foo", "bar");
    console.log("connected redis");
  } catch (error) {
    console.log(error);
  }
}
connect();
