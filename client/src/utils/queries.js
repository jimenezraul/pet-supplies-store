import { gql } from "@apollo/client";

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
        purchaseDate
        products {
          _id
          name
          description
          image_url
          price
          quantity
        }
        order_status
      }
      cart {
        _id
        product {
          name
          description
          _id
          image_url
          price
        }
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

export const GET_CATEGORIES = gql`
  query Categories {
    categories {
      _id
      name
    }
  }
`;

export const GET_PRODUCTS = gql`
  query Query {
    products {
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

export const GET_PRODUCT_BY_ID = gql`
  query Query($productId: ID!) {
    product(id: $productId) {
      _id
      name
      description
      image_url
      price
      quantity
    }
  }
`;

export const GET_CART = gql`
  query Query {
    get_cart {
      product {
        _id
        name
        description
        image_url
        price
      }
      quantity
      _id
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const GET_ORDERS = gql`
  query Get_orders($id: ID!) {
    get_orders(_id: $id) {
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
  }
`;
