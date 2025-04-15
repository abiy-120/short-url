"use server";
import { urls } from "./db";

function createAlias() {
  return Date.now().toString();
}

export async function addUrl(currentState, formdata: FormData) {
  const url = formdata.get("url");
  const alias = createAlias();
  const urlAlias = {
    alias,
    url,
  };
  await urls.insertOne(urlAlias);
  return alias;
}
