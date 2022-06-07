import { useState, useRef } from "react";
import { useMutation } from "@apollo/client";
import { ADD_PRODUCT } from "../../utils/mutations";
import { useSelector } from "react-redux";
import ProductImageCropper from "../ProductImageCropper";
import { GET_PRODUCTS } from "../../utils/queries";
import Loading from "../Loading";

const AddCategoryModal = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [newFile, setNewFile] = useState(null);
  const { categories } = useSelector((state) => state.store);
  const [addProduct] = useMutation(ADD_PRODUCT);
  const [message, setMessage] = useState("");

  const inputFile = useRef(null);
  const [formState, setFormState] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    category: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, description, price, quantity, category } = formState;
    // check if any of the fields are empty
    if (
      name === "" ||
      description === "" ||
      price === "" ||
      quantity === "" ||
      category === "" ||
      !newFile
    ) {
      alert("Please fill all the fields");
    }

    try {
      setLoading(true);
      await addProduct({
        variables: {
          image: newFile,
          name: name,
          description: description,
          price: parseFloat(price),
          quantity: parseInt(quantity),
          categoryId: category,
        },
        update: (cache, { data: { addProduct } }) => {
          const { products } = cache.readQuery({
            query: GET_PRODUCTS,
          });
          cache.writeQuery({
            query: GET_PRODUCTS,
            data: { products: products.concat([addProduct]) },
          });
        },
      });
      setLoading(false);
      setMessage(`${name} added successfully`);
      setNewFile(null);
      setFormState({
        name: "",
        description: "",
        price: "",
        quantity: "",
        category: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleClose = () => {
    setSelectedFile(null);
    setOpenModal(false);
    inputFile.current.value = "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <>
      <div className='justify-center flex w-full'>
        {loading && <Loading />}
        <div className='w-full md:w-11/12 border flex justify-center mx-auto max-w-3xl'>
          {/*content*/}
          <div className='border-0 shadow-lg relative flex flex-wrap w-full bg-white outline-none focus:outline-none'>
            {/*header*/}
            <div className='w-full pt-5 pl-5 border-b border-solid border-slate-200 rounded-t'>
              <h2 className='text-2xl font-semibold'>Add Product</h2>

              {message && (
                <div className='w-full'>
                  <div className='text-center text-sm text-green-500 p-2'>
                    <div
                      className='relative py-3 pl-4 pr-10 leading-normal text-white bg-green-600 rounded-lg'
                      role='alert'
                    >
                      <p>{message}</p>
                      <span className='absolute inset-y-0 right-0 flex items-center mr-4'>
                        <svg
                          className='w-4 h-4 fill-current'
                          role='button'
                          viewBox='0 0 20 20'
                          onClick={() => {
                            setMessage("");
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
                  </div>
                </div>
              )}
            </div>

            {/*body*/}
            <form className='w-full flex flex-col' onSubmit={handleSubmit}>
              <div className='relative p-6'>
                <div className='flex flex-wrap -mx-3 mb-6'>
                  <div className='w-full px-3 mb-6 md:mb-0 flex flex-col space-y-3'>
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
                      value={formState.category}
                    >
                      <option>Select Category</option>
                      {categories.map((category) => (
                        <option key={category._id} value={category._id}>
                          {category.name}
                        </option>
                      ))}
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
                            setOpenModal(true);
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
              <div className='flex items-center justify-end px-6 py-2 border-t border-solid border-slate-200 rounded-b'>
                <button
                  className='bg-blue-600 text-white active:bg-blue-600 font-bold uppercase text-sm my-4 px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                  type='submit'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {openModal && (
        <ProductImageCropper
          file={selectedFile}
          setNewFile={setNewFile}
          handleClose={handleClose}
        />
      )}
    </>
  );
};

export default AddCategoryModal;
