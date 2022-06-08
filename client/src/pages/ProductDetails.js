import { useQuery, useMutation } from "@apollo/client";
import { GET_PRODUCT_BY_ID } from "../utils/queries";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addToWishlist,
  updateCart,
} from "../redux/Store/storeSlice";
import { useRef, useEffect, useState } from "react";
import Auth from "../utils/auth";
import { ADD_TO_WISHLIST } from "../utils/mutations";
import { ADD_TO_CART } from "../utils/mutations";
import { idbPromise } from "../utils/helpers";
import ScrollCart from "../components/ScrollCart";

const ProductDetails = () => {
  const quantity = useRef(null);
  const dispatch = useDispatch();
  const [product, setProduct] = useState({ inWishlist: false });
  const auth = Auth.loggedIn();
  const { id } = useParams();
  const [addToWishList] = useMutation(ADD_TO_WISHLIST);
  const [addToUserCart] = useMutation(ADD_TO_CART);
  let cart = useSelector((state) => state.store.cart);
  let data = useQuery(GET_PRODUCT_BY_ID, {
    variables: {
      productId: id,
    },
  });

  let wishlist = useSelector((state) => state.store.wishlist);

  useEffect(() => {
    if (data?.data) {
      setProduct(data.data?.product);
    }
    if (wishlist.length > 0) {
      wishlist.forEach((item) => {
        if (item._id === id) {
          setProduct({ ...data.data?.product, inWishlist: true });
        }
      });
    }
  }, [data, id, wishlist]);

  const addToWishlistHandler = async (product) => {
    if (auth) {
      await addToWishList({
        variables: {
          productId: product._id,
        },
      });
      dispatch(addToWishlist(product));
    }
  };

  const options = [];
  for (let i = 1; i <= 10; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  const addToCartHandler = () => {
    // if already in cart, update the quantity

    if (cart?.length > 0) {
      let inCart = false;
      let quantityInCart = 0;

      cart.forEach((item) => {
        if (item._id === product._id) {
          inCart = true;
          quantityInCart =
            parseInt(item.quantity) + parseInt(quantity?.current?.value);
        }
      });
      const newCart = cart.map((item) => {
        if (item._id === product._id) {
          return { ...item, quantity: quantityInCart };
        }
        return item;
      });

      if (inCart) {
        if (auth) {
          addToUserCart({
            variables: {
              ...product,
              id: product._id,
              quantity: quantityInCart,
              imageUrl: product.image_url,
            },
          }).then(() => {
            dispatch(updateCart(newCart));
            idbPromise("cart", "put", { ...product, quantity: quantityInCart });
          });
          return;
        }
        dispatch(updateCart(newCart));
        idbPromise("cart", "put", { ...product, quantity: quantityInCart });
        return;
      }
    }

    if (auth) {
      addToUserCart({
        variables: {
          ...product,
          id: product._id,
          quantity: parseFloat(quantity?.current?.value),
          imageUrl: product.image_url,
        },
      }).then(() => {
        dispatch(
          addToCart({ ...product, quantity: parseInt(quantity.current.value) })
        );
        idbPromise("cart", "put", {
          ...product,
          quantity: parseInt(quantity.current.value),
        });
      });
    } else {
      dispatch(
        addToCart({ ...product, quantity: parseInt(quantity.current.value) })
      );
      idbPromise("cart", "put", {
        ...product,
        quantity: parseInt(quantity.current.value),
      });
    }
  };

  return (
    <div className='flex-1'>
      <ScrollCart />
      <div className='container mx-auto px-4 py-8'>
        <section className='text-gray-600 body-font overflow-hidden'>
          <div className='container px-5 py-24 mx-auto'>
            <div className='lg:w-4/5 mx-auto flex flex-wrap'>
              <img
                alt='ecommerce'
                className='lg:w-1/2 h-full object-cover object-center rounded'
                src={product.image_url}
              />
              <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
                <h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>
                  {product.name}
                </h1>
                <div className='flex mb-4'></div>
                <p className='leading-relaxed'>{product.description}</p>
                <div className='flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5'>
                  <div className='flex ml-6 items-center'>
                    <span className='mr-3'>Quantity</span>
                    <div className='relative'>
                      <select
                        ref={quantity}
                        className='rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-base pl-3 pr-10'
                      >
                        {options}
                      </select>
                      <span className='absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center'>
                        <svg
                          fill='none'
                          stroke='currentColor'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          className='w-4 h-4'
                          viewBox='0 0 24 24'
                        >
                          <path d='M6 9l6 6 6-6'></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div className='flex'>
                  <span className='title-font font-medium text-2xl text-gray-900'>
                    ${product.price}
                  </span>
                  <button
                    onClick={addToCartHandler}
                    className='flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 font-bold'
                  >
                    Add To Cart
                  </button>
                  {auth && (
                    <button
                      onClick={() => addToWishlistHandler(product)}
                      className={`rounded-full w-10 h-10 bg-gray-200 p-0 hover:border hover:bg-gray-300 hover:border-red-500 inline-flex items-center justify-center ${
                        product?.inWishlist ? "text-red-500" : "text-gray-500"
                      }  ml-4`}
                    >
                      <i className='fa-solid fa-bookmark'></i>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetails;
