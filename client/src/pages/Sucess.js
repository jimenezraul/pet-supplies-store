import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useMutation } from "@apollo/client";
import Jumbotron from "../components/Jumbotron";
import { ADD_ORDER } from "../utils/mutations";
import { idbPromise } from "../utils/helpers";
import Auth from "../utils/auth";

function Success() {
  const auth = Auth.loggedIn();
  if (!auth) {
    window.location.href = "/login";
  }
  const user = useSelector((state) => state.store.user);
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = user?.cart;
      const products = cart?.map((product) => product?.product?._id);
      if (products?.length) {
        const { data } = await addOrder({ variables: { products } });
        const productData = data.addOrder.products;
        productData?.forEach((item) => {
          idbPromise("cart", "delete", item);
        });
      }
    }

    saveOrder();
  }, [addOrder, user]);

  // timeout and redirect to home
  setTimeout(() => {
    window.location.href = "/";
  }, 3000);

  return (
    <div>
      <Jumbotron>
        <h1>Success!</h1>
        <h2>Thank you for your purchase!</h2>
        <h2>You will now be redirected to the homepage</h2>
      </Jumbotron>
    </div>
  );
}

export default Success;
