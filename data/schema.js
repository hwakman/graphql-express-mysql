const graphqlHTTP = require('express-graphql');
const QueryType = require('./queryType');
const { GraphQLSchema } = require('graphql');

// const MutationType = new GraphQLObjectType();

const schema = new GraphQLSchema({
    query: QueryType,
    // mutation: MutationType
});

module.exports =  graphqlHTTP({
    schema: schema,
    graphiql: true,
})