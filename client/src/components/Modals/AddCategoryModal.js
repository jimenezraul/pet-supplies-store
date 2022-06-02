import { useMutation } from "@apollo/client";
import { ADD_CATEGORY } from "../../utils/mutations";
import { useDispatch, useSelector } from "react-redux";
import { updateCategory } from "../../redux/Store/storeSlice";
import { GET_CATEGORIES } from "../../utils/queries";

const AddCategoryModal = ({ setShowModal }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.store);

  const [addCategory] = useMutation(ADD_CATEGORY);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const categoryName = e.target.categoryName.value.trim();
    if (categoryName) {
      let newCategory = await addCategory({
        variables: {
          name: categoryName,
        },
        update: (cache, { data: { addCategory } }) => {
          const { categories } = cache.readQuery({ query: GET_CATEGORIES });
          cache.writeQuery({
            query: GET_CATEGORIES,
            data: { categories: categories.concat([addCategory]) },
          });
        },
      });

      newCategory = newCategory?.data.addCategory;
      const newData = [...categories, newCategory];

      dispatch(updateCategory(newData));
      setShowModal(false);
    } else {
      alert("Please enter a category name");
    }
  };
  return (
    <>
      <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
        <div className='relative w-11/12 md:w-3/5 lg:w-4/12 flex justify-center my-6 mx-auto max-w-3xl'>
          {/*content*/}
          <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
            {/*header*/}
            <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
              <h3 className='text-3xl font-semibold'>Add Category</h3>
              <button
                className='p-1 ml-auto border-0 text-black opacity-4 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                onClick={() => setShowModal(false)}
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
                  <div className='w-full px-3 mb-6 md:mb-0'>
                    <label
                      className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                      htmlFor='grid-first-name'
                    >
                      Category Name
                    </label>
                    <input
                      className='appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                      id='grid-first-name'
                      type='text'
                      name='categoryName'
                      placeholder='Category Name'
                    />
                  </div>
                </div>
              </div>
              {/*footer*/}
              <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
                <button
                  className='text-red-500 border border-white hover:border-red-500 background-transparent font-bold uppercase px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                  type='button'
                  onClick={() => setShowModal(false)}
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

export default AddCategoryModal;
