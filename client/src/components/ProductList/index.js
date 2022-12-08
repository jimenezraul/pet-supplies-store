import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, updateCartQuantity } from "../../redux/Store/storeSlice";
import { useMutation } from "@apollo/client";
import { ADD_TO_CART } from "../../utils/mutations";
import Auth from "../../utils/auth";
import { idbPromise } from "../../utils/helpers";

const ProductList = () => {
  const auth = Auth.loggedIn();
  const [add2Cart] = useMutation(ADD_TO_CART);
  const products = useSelector((state) => state.store.products);
  const cart = useSelector((state) => state.store.cart);
  const dispatch = useDispatch();

  const addToCartHandler = (e) => {
    //check if the product is already in the cart
    const inCart = cart.find((p) => p._id === e._id);

    if (inCart) {
      add2Cart({
        variables: {
          ...e,
          id: e._id,
          quantity: inCart.quantity + 1,
          imageUrl: e.image_url,
        },
      }).then(() => {
        dispatch(
          updateCartQuantity({
            _id: e._id,
            quantity: inCart.quantity + 1,
          })
        );
        idbPromise("cart", "put", {
          ...e,
          quantity: inCart.quantity + 1,
        });
      });
    } else {
      if (auth) {
        add2Cart({
          variables: {
            ...e,
            id: e._id,
            quantity: 1,
            imageUrl: e.image_url,
          },
        }).then(() => {
          dispatch(addToCart({ ...e, quantity: 1 }));
          idbPromise("cart", "put", { ...e, quantity: 1 });
        });
      } else {
        dispatch(addToCart({ ...e, quantity: 1 }));
        idbPromise("cart", "put", { ...e, quantity: 1 });
      }
    }
  };
  return (
    <div className='w-full md:w-8/12 mb-5'>
      <div className='flex flex-wrap'>
        {products.map((product) => (
          <div
            className='w-6/12 lg:w-4/12 flex justify-center p-2'
            key={product._id}
          >
            <div className='w-full flex flex-col justify-between max-w-sm rounded overflow-hidden border bg-white shadow-md'>
              <div className='w-full'>
                <img
                  className='h-52 mx-auto mt-2'
                  src={`${product.image_url}`}
                  alt={product.name}
                />
                <div className='p-2 md:px-6 md:py-4'>
                  <div className=''>
                  <span className="pr-2 font-semibold">Price: </span>
                    <p className='rounded inline-block bg-blue-500 text-white font-semibold px-1'>
                      ${product.price}
                    </p>
                  </div>
                  <Link to={`/store/product/${product._id}`}>
                    <div className='mt-2 font-bold text-xl mb-2 hover:text-blue-700 hover:underline'>
                      {product.name}
                    </div>
                  </Link>
                </div>
              </div>
              <div className='w-full px-6 pt-4 pb-2 flex justify-center'>
                <button
                  onClick={() => addToCartHandler(product)}
                  className='ml-1 mb-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent'
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
