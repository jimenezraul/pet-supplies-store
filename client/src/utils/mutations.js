import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const SIGNUP = gql`
  mutation Mutation(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    signup(
      first_name: $firstName
      last_name: $lastName
      email: $email
      password: $password
    ) {
      token
    }
  }
`;

export const UPDATE_PROFILE_PICTURE = gql`
  mutation Mutation($image: Upload!) {
    updateProfilePicture(image: $image) {
      user {
        image_url
      }
    }
  }
`;

export const REMOVE_FROM_WISHLIST = gql`
  mutation Mutation($productId: ID!) {
    removeFromWishlist(productId: $productId) {
      _id
      name
    }
  }
`;

export const ADD_TO_WISHLIST = gql`
  mutation Mutation($productId: ID!) {
    addToWishlist(productId: $productId) {
      _id
    }
  }
`;

export const ADD_TO_CART = gql`
  mutation Mutation(
    $id: ID!
    $name: String!
    $description: String!
    $imageUrl: String!
    $price: Float!
    $quantity: Int!
  ) {
    add2Cart(
      _id: $id
      name: $name
      description: $description
      image_url: $imageUrl
      price: $price
      quantity: $quantity
    ) {
      _id
      quantity
    }
  }
`;

export const DELETE_FROM_CART = gql`
  mutation Mutation($productId: ID!) {
    deleteFromCart(productId: $productId) {
      _id
    }
  }
`;

export const ADD_CATEGORY = gql`
  mutation Mutation($name: String!) {
    addCategory(name: $name) {
      _id
      name
    }
  }
`;

export const DELETE_CATEGORY = gql`
  mutation Mutation($deleteCategoryId: ID!) {
    deleteCategory(id: $deleteCategoryId) {
      _id
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation Mutation(
    $image: Upload!
    $name: String!
    $description: String!
    $price: Float!
    $categoryId: ID!
    $quantity: Int!
  ) {
    addProduct(
      image: $image
      name: $name
      description: $description
      price: $price
      categoryId: $categoryId
      quantity: $quantity
    ) {
      _id
      name
      description
      image_url
      price
      quantity
      category {
        _id
        name
      }
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation Mutation(
    $_id: ID!
    $image: Upload
    $name: String
    $description: String
    $price: Float
    $quantity: Int
    $category: ID
  ) {
    updateProduct(
      id: $_id
      image: $image
      name: $name
      description: $description
      price: $price
      quantity: $quantity
      category: $category
    ) {
      _id
      name
      description
      image_url
      price
      quantity
      category {
        _id
        name
      }
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation Mutation($deleteProductId: ID!) {
    deleteProduct(id: $deleteProductId) {
      _id
    }
  }
`;

export const ADD_ORDER = gql`
  mutation Mutation($products: [ID]!) {
    addOrder(products: $products) {
      _id
      products {
        _id
      }
    }
  }
`;
