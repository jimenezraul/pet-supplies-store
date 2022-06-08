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
      <div className='bg-white border rounded shadow-lg flex flex-wrap py-5'>
        {products.map((product) => (
          <div
            className='w-6/12 lg:w-4/12 flex justify-center p-2'
            key={product._id}
          >
            <div className='max-w-sm rounded overflow-hidden'>
              <img
                className='h-52 mx-auto'
                src={product.image_url}
                alt={product.name}
              />
              <div className='px-6 py-4'>
                <Link to={`/store/product/${product._id}`}>
                  <div className='font-bold text-xl mb-2 hover:text-blue-700 hover:underline'>
                    {product.name}
                  </div>
                </Link>
                <p className='text-gray-700 font-semibold'>${product.price}</p>
              </div>
              <div className='px-6 pt-4 pb-2'>
                <button
                  onClick={() => addToCartHandler(product)}
                  className='ml-1 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent'
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
