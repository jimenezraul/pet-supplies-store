const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar Upload

  type Category {
    _id: ID
    name: String
  }

  type SubCategory {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image_url: String
    price: Float
    quantity: Int
    category: Category
    subCategory: SubCategory
  }

  type Order {
    _id: ID
    purchasedDate: String
    products: [Product]
  }

  type User {
    _id: ID
    first_name: String
    last_name: String
    image_url: String
    email: String
    password: String
    isAdmin: Boolean
    orders: [Order]
    cart: [Product]
    wishlist: [Product]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
    users: [User]
    products: [Product]
    product(id: ID!): Product
    categories: [Category]
    subcategories: [SubCategory]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(
      first_name: String!
      last_name: String!
      email: String!
      password: String!
    ): Auth
    updateUser(
      first_name: String
      last_name: String
      email: String
      password: String
      file: Upload
    ): Auth
    addToCart(productId: ID!): User
  }
`;

module.exports = typeDefs;
