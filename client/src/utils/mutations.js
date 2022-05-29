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
