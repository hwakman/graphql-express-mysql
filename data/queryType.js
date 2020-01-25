const db = require('promise-mysql').createPool({
    host: 'localhost',
    user: 'root',
    database: 'my_database'
})
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } = require('graphql');

const BrandType = new GraphQLObjectType({
    name: 'brands',
    fields: () => ({
        id: {type: GraphQLInt},
        name: {type: GraphQLString},
        description: {type: GraphQLString},
        amount: {type: GraphQLInt}
    })
})

const ProductType = new GraphQLObjectType({
    name: 'products',
    fields: () => ({
        id: {type: GraphQLInt},
        name: {type: GraphQLString},
        description: {type: GraphQLString}
    })
})

const UserType = new GraphQLObjectType({
    name: 'users',
    fields: () => ({
        id: {type: GraphQLInt},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
    })
});


// QueryType
const QueryType = new GraphQLObjectType({
    name: "Query",
    description: "query of product",
    fields: () => ({
      products: {
          type: new GraphQLList(ProductType),
          resolve: async () => {
              const result = (await db).query('SELECT * FROM product')
              return result
          }
      },
      brands: {
        type: new GraphQLList(BrandType),
        resolve: async () => {
            const result = (await db).query('SELECT * FROM brand')
            return result
        }
      },
      users: {
        type: new GraphQLList(UserType),
        resolve: async () => {
            const result = (await db).query('SELECT * FROM user')
            return result
        }
      }
    })
});

module.exports = QueryType