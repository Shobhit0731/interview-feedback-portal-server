const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./Schema/TypeDefs")
const { resolvers } = require("./Schema/Resolvers")

const express = require("express")
// const schema = require('./Schema')

const app = express();

const startapolloserver = async () => {
    const server = new ApolloServer({ typeDefs, resolvers })
    await server.start();
    server.applyMiddleware({ app })

    app.listen({ port: 4000 }, () => {
        console.log("Server Running on the Port 4000...");
    });
}

startapolloserver()
