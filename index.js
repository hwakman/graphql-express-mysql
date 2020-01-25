var express = require('express');
var graphqlHTTP = require('./data/schema')

var app = express();
app.use('/graphql', graphqlHTTP);
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');