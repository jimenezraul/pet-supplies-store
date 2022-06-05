import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./styles.css";

const ScrollCart = () => {
  const cart = useSelector((state) => state.store.cart);

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 40) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 40) {
      setShowScroll(false);
    }
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <Link to='/cart'>
      <div
        className='scrollCart right-12'
        style={{ height: 120, display: showScroll ? "flex" : "none" }}
      >
        <i className='text-2xl relative fa-solid fa-cart-shopping bg-white rounded-full shadow-lg p-5'>
          {cart.length > 0 && (
            <span className='absolute badge-cart inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full'>
              {cart.length}
            </span>
          )}
        </i>
      </div>
    </Link>
  );
};

export default ScrollCart;
