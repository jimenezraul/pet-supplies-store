import { useState, useRef } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_PRODUCT } from "../../utils/mutations";
import { useSelector } from "react-redux";
import { GET_PRODUCTS } from "../../utils/queries";

const UpdateProductModal = (props) => {
  const { product } = props;
  const inputFile = useRef(null);
  const [formState, setFormState] = useState(product);

  const { categories } = useSelector((state) => state.store);

  const [SelectedFile, setSelectedFile] = useState(null);
  const [newFile, setNewFile] = useState(null);
  const [updateProduct] = useMutation(UPDATE_PRODUCT);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "price") {
      setFormState({ ...formState, [name]: parseFloat(value) });
      return;
    }
    if (name === "quantity") {
      setFormState({ ...formState, [name]: parseInt(value) });
    } else {
      setFormState({ ...formState, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {};
    for (let key in formState) {
      if (formState[key] !== "") {
        if (key === "category") {
          data[key] = formState[key]._id;
        } else {
          data[key] = formState[key];
        }
      }
    }

    await updateProduct({
      variables: {
        _id: data._id,
        name: data.name,
        description: data.description,
        price: parseFloat(data.price),
        quantity: parseInt(data.quantity),
        category: data.category,
      },
      update: (cache, { data: { updateProduct } }) => {
        const { products } = cache.readQuery({
          query: GET_PRODUCTS,
        });

        const newProducts = products.map((product) => {
          if (product._id === updateProduct._id) {
            return updateProduct;
          }
          return product;
        });
      
        cache.writeQuery({
          query: GET_PRODUCTS,
          data: { products: newProducts },
        });
      },
    });
    props.setShowUpdateModal(false);
  };

  return (
    <>
      <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
        <div className='relative w-11/12 md:w-3/5 lg:w-4/12 flex justify-center my-6 mx-auto max-w-3xl'>
          {/*content*/}
          <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
            {/*header*/}
            <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
              <h3 className='text-3xl font-semibold'>Update Product</h3>
              <button
                className='p-1 ml-auto border-0 text-black opacity-4 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                onClick={() => props.setShowUpdateModal(false)}
              >
                <span className='bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none'>
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <form className='w-full flex flex-col' onSubmit={handleSubmit}>
              <div className='relative p-6 flex-auto'>
                <div className='flex flex-wrap -mx-3 mb-6'>
                  <div className='w-full px-3 mb-6 md:mb-0 flex flex-col space-y-4'>
                    <input
                      name='name'
                      className='appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                      placeholder='Product Name'
                      type='text'
                      onChange={handleChange}
                      value={formState.name}
                    />
                    <textarea
                      name='description'
                      className='appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                      placeholder='Description'
                      type='text'
                      value={formState.description}
                      onChange={handleChange}
                    />
                    <input
                      name='price'
                      className='appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                      placeholder='Price'
                      type='number'
                      step='0.01'
                      value={formState.price}
                      onChange={handleChange}
                    />
                    <select
                      className='w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                      name='category'
                      onChange={handleChange}
                      value={formState.category.name}
                    >
                      <option value={formState.category._id}>
                        {formState.category.name}
                      </option>
                      {categories.map(
                        (category) =>
                          category._id !== formState.category._id && (
                            <option key={category._id} value={category._id}>
                              {category.name}
                            </option>
                          )
                      )}
                    </select>
                    {newFile ? (
                      <div
                        className='relative py-3 pl-4 pr-10 leading-normal text-white bg-blue-600 rounded-lg'
                        role='alert'
                      >
                        <p>{newFile.name}</p>
                        <span className='absolute inset-y-0 right-0 flex items-center mr-4'>
                          <svg
                            className='w-4 h-4 fill-current'
                            role='button'
                            viewBox='0 0 20 20'
                            onClick={() => {
                              setNewFile(null);
                            }}
                          >
                            <path
                              d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                              clipRule='evenodd'
                              fillRule='evenodd'
                            ></path>
                          </svg>
                        </span>
                      </div>
                    ) : (
                      <input
                        ref={inputFile}
                        name='image'
                        placeholder='Product Image'
                        type='file'
                        onChange={(e) => {
                          if (e?.target?.files[0]) {
                            setSelectedFile(e.target.files[0]);
                            props.setShowUpdateModal(true);
                          } else {
                            setSelectedFile(null);
                          }
                        }}
                      />
                    )}
                    <input
                      name='quantity'
                      placeholder='Quantity'
                      type='number'
                      className='w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                      onChange={handleChange}
                      value={formState.quantity}
                    />
                  </div>
                </div>
              </div>
              {/*footer*/}
              <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
                <button
                  className='text-red-500 border border-white hover:border-red-500 background-transparent font-bold uppercase px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                  type='button'
                  onClick={() => props.setShowUpdateModal(false)}
                >
                  Close
                </button>
                <button
                  className='bg-blue-600 text-white hover:bg-blue-800 active:bg-blue-800 font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                  type='submit'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
    </>
  );
};

export default UpdateProductModal;
