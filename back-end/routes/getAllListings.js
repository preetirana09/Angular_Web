import { fakeListings } from "./fake-data";
import { db } from "../database";

export const getAllListingsRoute = {
  method: "GET",
  path: "/api/listings",
  handler: (req, h) => {
    return fakeListings;
  },
};
