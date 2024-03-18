const { ApolloServer } = require("apollo-server")
const mongoose = require("mongoose")
const { MONGODB } = require("./config")
const typeDefs = require("./graphql/typeDefs")