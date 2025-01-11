import { MongoClient } from "mongodb";

if(!process.env.MONGODB_URI) {
    throw new Error("Please add MongoDB URI to .env.local")
}
