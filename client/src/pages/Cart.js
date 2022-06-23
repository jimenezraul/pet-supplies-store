import CartItems from "../components/CartItems";
import { useSelector } from "react-redux";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";
import { loadStripe } from "@stripe/stripe-js";
import { QUERY_CHECKOUT } from "../utils/queries";
import { useEffect } from "react";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const Cart = () => {
  const cart = useSelector((state) => state.store.cart);
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  const auth = Auth.loggedIn();
  const total = useSelector((state) =>
    state.store?.cart
      .reduce((acc, item) => acc + item.quantity * item.price, 0)
      .toFixed(2)
  );
  const total_items = useSelector((state) =>
    state.store.cart.reduce((acc, item) => acc + item.quantity, 0)
  );
  let item = "item";
  if (total_items > 1) {
    item = "items";
  }

  function submitCheckout() {
    const productIds = [];

    cart.forEach((item) => {
      for (let i = 0; i < item.quantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  return (
    <div className='container mx-auto mt-5 flex-1'>
      <div className='flex flex-wrap shadow-md my-10'>
        <div className='w-full md:w-3/4 bg-white px-10 py-10'>
          <div className='flex justify-between border-b pb-8'>
            <h1 className='font-semibold text-2xl'>Shopping Cart</h1>
            <h2 className='font-semibold text-2xl'>
              {total_items} {item}
            </h2>
          </div>
          {total_items !== 0 && (
            <div className='flex mt-10 mb-5 border-b pb-5'>
              <h3 className='font-semibold text-gray-600 text-xs uppercase w-2/5'>
                Product Details
              </h3>
              <h3 className='font-semibold text-gray-600 text-xs uppercase w-2/5 text-center'>
                Quantity
              </h3>
              <h3 className='font-semibold text-gray-600 text-xs uppercase w-2/5 text-center'>
                Total
              </h3>
            </div>
          )}

          <CartItems />

          <Link
            to='/store'
            className='flex font-semibold text-blue-800 text-sm mt-10'
          >
          <i className="flex flex-col justify-center mr-1 fa-solid fa-arrow-left"></i>
            Continue Shopping
          </Link>
        </div>

        <div id='summary' className='w-full md:w-1/4 px-8 py-10 bg-blue-100'>
          <h1 className='font-semibold text-2xl border-b pb-8'>
            Order Summary
          </h1>
          <div className='flex justify-between mt-10 mb-5'>
            <span className='font-semibold text-sm uppercase'>
              {item} {total_items}
            </span>
            <span className='font-semibold text-sm'>${total}</span>
          </div>
          <div className='border-t mt-8'>
            <div className='flex font-semibold justify-between py-6 text-sm uppercase'>
              <span>Total cost</span>
              <span>${total}</span>
            </div>
            {auth ? (
              <button
                onClick={submitCheckout}
                className='bg-blue-700 font-semibold hover:bg-blue-800 py-3 text-sm text-white uppercase w-full'
              >
                Checkout
              </button>
            ) : (
              <Link to='/login'>
                <button className='bg-blue-700 font-semibold hover:bg-blue-800 py-3 text-sm text-white uppercase w-full'>
                  Login to Checkout
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
