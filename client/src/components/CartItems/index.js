import { useSelector, useDispatch } from "react-redux";
import { useMutation } from "@apollo/client";
import { ADD_TO_CART, DELETE_FROM_CART } from "../../utils/mutations";
import {
  updateCartQuantity,
  deleteFromCart,
} from "../../redux/Store/storeSlice";
import CartSingleItem from "../CartItem";
import Auth from "../../utils/auth";

const CartItem = () => {
  const auth = Auth.loggedIn();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.store.cart);
  const [add2Cart] = useMutation(ADD_TO_CART);
  const [deleteFromUserCart] = useMutation(DELETE_FROM_CART);

  if (cart.length === 0) {
    return (
      <div className='flex justify-center hover:bg-gray-100 -mx-8 px-6 py-5'>
        <div>
          <h2 className='text-gray-700 font-semibold'>Your cart is empty</h2>
        </div>
      </div>
    );
  }

  const increaseAndDecreaseHandler = (action, item) => {
    if (action === "increase") {
      if (auth) {
        add2Cart({
          variables: {
            ...item,
            id: item._id,
            quantity: item.quantity + 1,
            imageUrl: item.image_url,
          },
        }).then(() => {
          dispatch(
            updateCartQuantity({
              _id: item._id,
              quantity: item.quantity + 1,
            })
          );
        });
      } else {
        dispatch(
          updateCartQuantity({
            _id: item._id,
            quantity: item.quantity + 1,
          })
        );
      }
    } else {
      if (item.quantity === 1) {
        if (auth) {
          deleteFromUserCart({
            variables: {
              productId: item._id,
            },
          }).then(() => {
            dispatch(deleteFromCart(item._id));
          });
          return;
        } else {
          dispatch(deleteFromCart(item._id));
        }
      }
      if (auth) {
        add2Cart({
          variables: {
            ...item,
            id: item._id,
            quantity: item.quantity - 1,
            imageUrl: item.image_url,
          },
        }).then(() => {
          dispatch(
            updateCartQuantity({
              _id: item._id,
              quantity: item.quantity - 1,
            })
          );
        });
      } else {
        dispatch(
          updateCartQuantity({
            _id: item._id,
            quantity: item.quantity - 1,
          })
        );
      }
    }
  };

  return (
    <>
      {cart.map((item) => {
        return (
          <CartSingleItem
            key={item._id}
            item={item}
            increaseAndDecreaseHandler={increaseAndDecreaseHandler}
          />
        );
      })}
    </>
  );
};

export default CartItem;
