import { fileLoader, mergeTypes } from "merge-graphql-schemas";
import * as path from "path";
import * as user from "./user/index.js";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const typesArray = fileLoader(path.join(__dirname, "./**/*.graphql"));

const typeDefs = mergeTypes(typesArray, { all: true });

export default {
  resolvers: {
    Mutation: {
      ...user.Mutation,
    },
  },
  typeDefs,
};


