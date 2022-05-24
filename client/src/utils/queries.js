import { gql } from '@apollo/client';

export const QUERY_PETS = gql`
  query pets($username: String) {
    pets(username: $username) {
      _id
      petText
      createdAt
      petName
     
      
    }
  }
`;

export const QUERY_PET = gql`
  query pet($id: ID!) {
    pet(_id: $id) {
      _id
      petText
      createdAt
      petName
      
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      
      pets {
        _id
        petText
        createdAt
        
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      
      pets {
        _id
        petText
        createdAt
       
      }
     
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
     
    }
  }
`;
