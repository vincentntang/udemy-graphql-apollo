const {graphqlExpress, graphiqlExpress} = require('apollo-server-express')
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const {makeExecutableSchema} = require('graphql-tools')

const port = 9001;

const typeDefs = `
  type Query {
    greeting: String
  }
`

const resolvers = {
  Query: {
    greeting: () => 'Coming in hot from the backend!'
  }
}

const schema = makeExecutableSchema({typeDefs, resolvers});

const app = express();
app.use(cors(),bodyParser.json());
app.use('/graphql', graphqlExpress({schema}));
app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));
app.listen(port, () => console.log(`Server running on ${port}`));

