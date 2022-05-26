import { createSlice } from "@reduxjs/toolkit";
const pic1 = "/assets/categories/dogs/accessories/bandanas.jpg";
const pic2 = "/assets/categories/dogs/accessories/food_bottle.jpg";
const pic3 = "/assets/categories/dogs/accessories/out_set.jpg";
const pic4 = "/assets/categories/dogs/accessories/portable.jpg";
const pic5 = "/assets/categories/dogs/accessories/towel.jpg";
const pic6 = "/assets/categories/dogs/care/clippers.jpg";
const pic7 = "/assets/categories/dogs/care/ear_wipes.jpg";
const pic8 = "/assets/categories/dogs/care/oil.jpg";
const pic9 = "/assets/categories/dogs/care/paw_cleaner.jpg";

export const storeSlice = createSlice({
  name: "ProPet",
  initialState: {
    products: [
      {
        id: 1,
        name: "Product 1",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: "10.99",
        url: pic1,
      },
      {
        id: 2,
        name: "Product 2",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: "22.99",
        url: pic2,
      },
      {
        id: 3,
        name: "Product 3",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: "25.99",
        url: pic3,
      },
      {
        id: 4,
        name: "Product 4",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: "30.99",
        url: pic4,
      },
      {
        id: 5,
        name: "Product 5",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: "15.99",
        url: pic5,
      },
      {
        id: 6,
        name: "Product 6",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: "59.99",
        url: pic6,
      },
      {
        id: 7,
        name: "Product 7",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: "25.99",
        url: pic7,
      },
      {
        id: 8,
        name: "Product 8",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: "8.99",
        url: pic8,
      },
      {
        id: 9,
        name: "Product 9",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: "9.99",
        url: pic9,
      },
    ],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: "",
    currentPage: "",
  },
  reducers: {
    updateProduct: (state, action) => {
      state.products = action.payload;
    },
    updateCategory: (state, action) => {
      state.categories = action.payload;
    },
    updateCurrentCategory: (state, action) => {
      state.currentCategory = action.payload;
    },
    updateCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    addToCart: (state, action) => {
      state.cartOpen = true;
      state.cart.push(action.payload);
    },
    addMultipleToCart: (state, action) => {
      state.cart.push(...action.payload);
    },
    deleteFromCart: (state, action) => {
      let newState = state.cart.filter((product) => {
        return product._id !== action.payload._id;
      });
      state.cartOpen = newState.length > 0;
      state.cart = newState;
    },
    updateCartQuantity: (state, action) => {
      state.cartOpen = true;
      state.cart = state.cart.map((product) => {
        if (action.payload._id === product._id) {
          product.purchaseQuantity = action.payload.purchaseQuantity;
        }
        return product;
      });
    },
    clearCart: (state, action) => {
      state.cartOpen = false;
      state.cart = [];
    },
    toggle_Cart: (state, action) => {
      state.cartOpen = !state.cartOpen;
    },
  },
});

export const {
  updateProduct,
  updateCategory,
  updateCurrentCategory,
  addToCart,
  addMultipleToCart,
  deleteFromCart,
  updateCartQuantity,
  clearCart,
  toggle_Cart,
  updateCurrentPage,
} = storeSlice.actions;

export default storeSlice.reducer;
