import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddCategoryModal from "../components/Modals/AddCategoryModal";
import AddProductCard from "../components/AddProductCard";
import { useQuery, useMutation } from "@apollo/client";
import { GET_CATEGORIES } from "../utils/queries";
import { updateCategory } from "../redux/Store/storeSlice";
import { DELETE_CATEGORY } from "../utils/mutations";
import AdminProductList from "../components/AdminProductList";
import Auth from "../utils/auth";

const Admin = () => {
    const auth = Auth.loggedIn();
  const { categories } = useSelector((state) => state.store);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const dispatch = useDispatch();
  const { loading, error, data } = useQuery(GET_CATEGORIES);
  const [deleteCategory] = useMutation(DELETE_CATEGORY);

  useEffect(() => {
    if (data) {
      dispatch(updateCategory(data.categories));
    }
  }, [data, dispatch]);

  const deleteCategoryHandler = async (categoryId) => {
    deleteCategory({
      variables: {
        deleteCategoryId: categoryId,
      },
      update(cache, { data: { deleteCategory } }) {
        const { categories } = cache.readQuery({ query: GET_CATEGORIES });
        cache.writeQuery({
          query: GET_CATEGORIES,
          data: {
            categories: categories.filter(
              (category) => category._id !== categoryId
            ),
          },
        });
      },
    })
      .then(() => {
        dispatch(
          updateCategory(
            categories.filter((category) => category._id !== categoryId)
          )
        );
      })
      .catch((err) => console.log(err));
  };
    
    if (!auth) {
        window.location.href = "/";
    }

  return (
    <div className='flex-1 flex'>
      <div className='container mx-auto px-4 flex-1 flex flex-wrap justify-center mt-10'>
        <div className='w-full md:w-5/12 mb-5 flex justify-center'>
          <div className='w-full flex justify-center'>
            <div className='w-full lg:w-4/5'>
              <div className='bg-white border p-3 shadow-lg mb-4 md:mb-0 flex flex-col'>
                <h2 className='text-2xl border-b-2 font-semibold pb-4'>
                  Categories
                </h2>
                <ul className='list-reset'>
                  {categories.map((category, index) => {
                    let last = false;
                    if (index === categories.length - 1) {
                      last = true;
                    }
                    return (
                      <li
                        key={index}
                        className={`${
                          !last && "border-b"
                        } p-2 font-medium flex justify-between`}
                      >
                        {category.name}
                        <div className='flex space-x-4 '>
                          <i className='fa-solid fa-pen-to-square flex flex-col justify-center hover:text-blue-700'></i>
                          <i
                            onClick={() => deleteCategoryHandler(category._id)}
                            className='cursor-pointer fa-solid fa-trash flex flex-col justify-center hover:text-red-600'
                          ></i>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <button
                  className='bg-blue-600 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150'
                  type='button'
                  onClick={() => setShowCategoryModal(true)}
                >
                  Add Category
                </button>
              </div>
            </div>
          </div>
          {showCategoryModal && (
            <AddCategoryModal setShowModal={setShowCategoryModal} />
          )}
        </div>
        <div className='w-full md:w-7/12 mb-5 flex justify-center '>
          <AddProductCard />
        </div>
        <div className='w-full mb-5 flex justify-center'>
          {/* <Product list with delete button /> */}
          <AdminProductList />
        </div>
      </div>
    </div>
  );
};

export default Admin;
