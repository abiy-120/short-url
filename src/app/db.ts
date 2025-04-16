import { MongoClient } from "mongodb";
// eslint-disable-next-line @typescript-eslint/no-require-imports
require("dotenv").config();
const uri: string = process.env?.MONGODB_URI || "";
const client = new MongoClient(uri);
const db = client.db("url_shortener");
export const urls = db.collection("url_aliases");
