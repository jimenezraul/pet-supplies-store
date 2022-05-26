import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const GET_USER = gql`
  query Query {
    user {
      _id
      first_name
      last_name
      image_url
      email
      isAdmin
      orders {
        _id
        purchasedDate
        products {
          _id
          name
          description
          image_url
          price
          quantity
        }
      }
      cart {
        _id
        name
        description
        image_url
        price
        quantity
      }
      wishlist {
        name
        description
        image_url
        price
        quantity
        _id
      }
    }
  }
`;
