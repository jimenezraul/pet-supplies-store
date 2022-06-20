import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { updateCategory } from "../../redux/Store/storeSlice";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "../../utils/queries";

const CategoriesCard = () => {
  const dispatch = useDispatch();
  const { data } = useQuery(GET_CATEGORIES);
  let categories = useSelector((state) => state.store.categories);

  const { id } = useParams();

  categories = categories.map((category) => {
    return {
      id: category._id,
      name: category.name,
      path: `/store/category/${category._id}`,
    };
  });
  if (id) {
    categories = categories.filter((category) => {
      return category.id === id;
    });
  }

  useEffect(() => {
    if (data) {
      dispatch(updateCategory(data.categories));
    }
  }, [data, dispatch]);

  return (
    <div className='w-full md:w-3/12 mt-2'>
      <div className='bg-white border p-3 shadow-lg mb-4 md:mb-0'>
        <h2 className='text-2xl border-b-2 font-semibold pb-4'>
          {id ? "Category" : "Categories"}
        </h2>
        <ul className='list-reset'>
          {categories.map((category, index) => {
            let last = false;
            if (index === categories.length - 1) {
              last = true;
            }
            return (
              <Link key={index} to={category.path}>
                <li
                  className={`${
                    !last && "border-b-2"
                  } p-2 hover:bg-gray-100 font-medium`}
                >
                  {category.name}
                </li>
              </Link>
            );
          })}
        </ul>
        {id && (
          <Link
            to='/store'
            className='flex font-semibold text-blue-800 text-sm pt-4 border-t-2'
          >
            <svg
              className='fill-current mr-2 text-blue-800 w-4'
              viewBox='0 0 448 512'
            >
              <path d='M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z' />
            </svg>
            Back
          </Link>
        )}
      </div>
    </div>
  );
};

export default CategoriesCard;
