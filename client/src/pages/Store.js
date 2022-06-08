import { useDispatch } from "react-redux";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../utils/queries";
import { updateProduct } from "../redux/Store/storeSlice";
import { useEffect } from "react";
import CategoriesCard from "../components/CategoriesCard";
import ProductList from "../components/ProductList";
import { useParams } from "react-router-dom";
import { idbPromise } from "../utils/helpers";
import ScrollCart from "../components/ScrollCart";
import Loading from "../components/Loading";

const Store = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, data } = useQuery(GET_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch(updateProduct(data.products));
      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    } else if (!loading) {
      idbPromise("products", "get").then((products) => {
        dispatch(updateProduct(products));
      });
    }
    if (id && data) {
      // filter products by category
      const filteredProducts = data.products.filter(
        (product) => product.category._id === id
      );
      dispatch(updateProduct(filteredProducts));
    }
  }, [data, loading, dispatch, id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const searchHandler = (e) => {
    const searchValue = e.target.value;
    const filteredProducts = data.products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        product.description.toLowerCase().includes(searchValue.toLowerCase())
    );
    dispatch(updateProduct(filteredProducts));
  };

  return (
    <div className='mt-3 flex-1'>
      {loading && <Loading />}
      <div className='container mx-auto'>
        <div className='flex flex-wrap justify-center md:space-x-2'>
          <div className='flex justify-end w-11/12'>
            <div className='xl:w-96'>
              <div className='input-group relative flex flex-wrap items-stretch w-fullrounded'>
                <input
                  onChange={searchHandler}
                  type='search'
                  className='form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  placeholder='Search'
                  aria-label='Search'
                  aria-describedby='button-addon2'
                />
                <span
                  className='input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded'
                  id='basic-addon2'
                ></span>
              </div>
            </div>
          </div>
          <CategoriesCard />
          <ProductList />
          <ScrollCart />
        </div>
      </div>
    </div>
  );
};

export default Store;
