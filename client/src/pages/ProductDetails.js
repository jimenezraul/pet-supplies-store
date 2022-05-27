import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/Store/storeSlice";
import { useRef } from "react";

const ProductDetails = () => {
  const quantity = useRef(null);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.store.products);
  const { id } = useParams();
  console.log(id);
  const product = products.find((product) => product._id === id);

  const options = [];
  for (let i = 1; i <= 10; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  const addToCartHandler = () => {
    console.log(quantity.current.value);
    dispatch(
      addToCart({ ...product, quantity: parseInt(quantity.current.value) })
    );
  };

  return (
    <div className='flex-1'>
      <div className='container mx-auto px-4 py-8'>
        <section className='text-gray-600 body-font overflow-hidden'>
          <div className='container px-5 py-24 mx-auto'>
            <div className='lg:w-4/5 mx-auto flex flex-wrap'>
              <img
                alt='ecommerce'
                className='lg:w-1/2 w-full h-auto object-cover object-center rounded'
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
                  <button className='rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4'>
                    <i className='fa-solid fa-bookmark'></i>
                  </button>
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
