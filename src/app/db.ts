import { MongoClient } from "mongodb";
const uri =
  "mongodb+srv://abiyhailu120:qHVaEOvb94Ta6zrg@urlshortener.cf9ymwj.mongodb.net/?retryWrites=true&w=majority&appName=UrlShortener";
const client = new MongoClient(uri);
const db = client.db("url_shortener");
export const urls = db.collection("url_aliases");
