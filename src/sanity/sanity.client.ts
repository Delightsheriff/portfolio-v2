import { createClient, type ClientConfig } from "@sanity/client";

const id = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

const config: ClientConfig = {
  projectId: id!,
  dataset: dataset!,
  apiVersion: "2024-12-16",
  useCdn: false,
};

const client = createClient(config);

export default client;
