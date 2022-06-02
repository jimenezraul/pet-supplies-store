const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar Upload

  type Category {
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
  }


  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
    order_status: String
  }

  type Cart {
    _id: ID
    product: Product
    quantity: Int
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
    cart: [Cart]
    wishlist: [Product]
  }

  type Checkout {
    session: ID
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
    get_cart: [Cart]
    checkout(products: [ID]!): Checkout
    get_orders(_id: ID!): Order
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(
      first_name: String!
      last_name: String!
      email: String!
      password: String!
    ): Auth
    addOrder(products: [ID]!): Order
    signup(
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
    ): Auth
    updateProfilePicture(image: Upload!): Auth
    add2Cart(
      _id: ID!
      name: String!
      description: String!
      image_url: String!
      price: Float!
      quantity: Int!
    ): Product
    addToWishlist(productId: ID!): Product
    removeFromWishlist(productId: ID!): Product
    deleteFromCart(productId: ID!): Cart
    addCategory(name: String!): Category
    deleteCategory(id: ID!): Category
    updateCategory(id: ID!, name: String!): Category
    addProduct(
      image: Upload!
      name: String!
      description: String!
      price: Float!
      quantity: Int!
      categoryId: ID!
    ): Product
    updateProduct(
      id: ID!
      image: Upload
      name: String
      description: String
      price: Float
      quantity: Int
      category: ID
    ): Product
    deleteProduct(id: ID!): Product
  }
`;

module.exports = typeDefs;
