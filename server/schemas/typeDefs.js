const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    thoughts: [Thought]
    friends: [User]
  }

  type Pet {
    _id: ID
    petText: String
    createdAt: String
    petname: String
   
  }

 

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    pets(username: String): 
    pet(_id: ID!): petName
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addpet(petText: String!): Pet
   
  }
`;

module.exports = typeDefs;
