"use server";

import { getClient } from "./apolloClient";
import { ListTodosDocument } from "@/graphql/generated/client";

export const getTodos = async () => {
  const client = getClient();
  const { data } = await client.query({ query: ListTodosDocument });
  return data;
};
