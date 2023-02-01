import { ApolloServer } from "apollo-server-express";
import express from "express";
import { UserAPI } from "./datasource/user.js";

const app = express();

class Server {
  constructor(config) {
    this.config = config;
  }
  startapolloserver = async (schema) => {
    const server = new ApolloServer({
      ...schema,
      dataSources: () => ({
        userAPI: new UserAPI(),
      }),
      context: async ({ req }) => {
        if (req) {
          return { token: req.headers.authorization };
        }
        return {};
      },
      onHealthCheck: () =>
        new Promise((resolve) => {
          resolve("I am OK");
        }),
    });
    await server.start();
    server.applyMiddleware({ app });

    const { port } = this.config;
    app.listen({ port }, () => {
      console.log(`Server Running on the Port ${port}`);
    });
  };
}

export default Server;
