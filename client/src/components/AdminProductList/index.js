import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../utils/queries";
import { updateProduct } from "../../redux/Store/storeSlice";

const AdminProductList = () => {
  const [filteredData, setFilteredData] = useState([]);
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  useEffect(() => {
    if (data) {
      setFilteredData(data.products);
    }
  }, [data]);

  const searchHandler = (e) => {
    e.preventDefault();
    const search = e.target.value;
    const filteredProducts = data.products.filter((product) => {
      return product.name.toLowerCase().includes(search.toLowerCase());
    });

    setFilteredData(filteredProducts);
  };

  return (
    <>
      <div className='flex flex-wrap justify-center space-x-2 bg-white w-full shadow-lg'>
        <div className='w-full text-center border-b-2 flex flex-col'>
          <h2 className='text-2xl font-semibold p-5'>Products</h2>
          <div className='w-full flex justify-center'>
            <div className='w-10/12 md:w-3/12 pb-4'>
              <input
                onChange={searchHandler}
                type='search'
                className='form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                placeholder='Search'
                aria-label='Search'
                aria-describedby='button-addon2'
              />
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col'>
          {filteredData.map((product) => (
            <div className='w-full flex border-b py-3' key={product._id}>
              <div className='w-2/12 flex justify-center p-2'>
                <img className='w-20' src={product.image_url} alt='product' />
              </div>
              <div className='w-7/12 flex justify-between'>
                <div className='font-bold text-xl mb-2'>{product.name}</div>
                <p className='text-gray-700 text-base'>{product.price}</p>
              </div>
              <div className='w-3/12 flex space-x-6 justify-center'>
                <i className='text-2xl cursor-pointer fa-solid fa-pen-to-square hover:text-blue-600'></i>
                <i className='text-2xl cursor-pointer fa-solid fa-trash hover:text-red-500'></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminProductList;
