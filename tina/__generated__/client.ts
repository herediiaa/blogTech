import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '1f562bea0e3fbd65765ad4d1d3c23ac548d073d0', queries });
export default client;
  