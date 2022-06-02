import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useMutation } from "@apollo/client";
import { DELETE_FROM_CART } from "../../utils/mutations";
import {
  updateCartQuantity,
  deleteFromCart,
} from "../../redux/Store/storeSlice";
import Auth from "../../utils/auth";

const CartItem = ({ item, increaseAndDecreaseHandler }) => {
  const auth = Auth.loggedIn();
  const dispatch = useDispatch();
  const [value, setValue] = useState(item.quantity);
  const total = (item.quantity * item.price).toFixed(2);

  const [deleteFromUserCart] = useMutation(DELETE_FROM_CART);

  useEffect(() => {
    setValue(item.quantity);
  }, [item.quantity]);

  const quantityHandler = (e) => {
    let quantityValue = e.target.value;

    if (quantityValue === "") {
      setValue("");
    }
    setValue(quantityValue);
  };

  useEffect(() => {
    if (value === 0) {
      deleteFromUserCart({
        variables: {
          productId: item._id,
        },
      }).then(() => {
        dispatch(deleteFromCart(item._id));
      });
    }

    if (value !== "") {
      const newValue = parseInt(value);
      dispatch(
        updateCartQuantity({
          _id: item._id,
          quantity: newValue,
        })
      );
    }
  }, [value, item._id, dispatch, deleteFromUserCart]);

  const removeItemHandler = () => {
    if (auth) {
      deleteFromUserCart({
        variables: {
          productId: item._id,
        },
      }).then(() => {
        dispatch(deleteFromCart(item._id));
      });
      return;
    }
    dispatch(deleteFromCart(item._id));
  };

  return (
    <div
      key={item._id}
      className='flex items-center hover:bg-gray-100 -mx-8 px-6 py-5'
    >
      <div className='flex w-2/5'>
        <div className='w-20'>
          <img className='w-24' src={item.image_url} alt='' />
        </div>
        <div className='flex flex-col justify-between ml-4 flex-grow'>
          <span className='font-bold text-sm'>{item.name}</span>
          <button
            onClick={removeItemHandler}
            className='font-semibold hover:text-red-500 text-gray-500 text-xs'
          >
            Remove
          </button>
        </div>
      </div>
      <div className='flex justify-center w-2/5'>
        <svg
          onClick={() => increaseAndDecreaseHandler("decrease", item)}
          className='fill-current text-gray-600 w-3 cursor-pointer'
          viewBox='0 0 448 512'
        >
          <path d='M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z' />
        </svg>

        <input
          className='mx-2 border text-center w-8'
          type='float'
          onChange={(e) => quantityHandler(e)}
          value={value}
        />

        <svg
          onClick={() => increaseAndDecreaseHandler("increase", item)}
          name='increase'
          className='fill-current text-gray-600 w-3 cursor-pointer'
          viewBox='0 0 448 512'
        >
          <path d='M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z' />
        </svg>
      </div>
      <span className='text-center w-2/5 font-semibold text-sm'>${total}</span>
    </div>
  );
};

export default CartItem;
