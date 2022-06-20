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
          <i class="flex flex-col justify-center mr-1 fa-solid fa-arrow-left"></i>
            Back
          </Link>
        )}
      </div>
    </div>
  );
};

export default CategoriesCard;
