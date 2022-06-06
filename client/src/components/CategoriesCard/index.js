import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { updateCategory } from "../../redux/Store/storeSlice";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "../../utils/queries";

const CategoriesCard = () => {
  const dispatch = useDispatch();
  const { data } = useQuery(GET_CATEGORIES);
  let categories = useSelector((state) => state.store.categories);
  
  categories = categories.map((category) => {
    return {
      name: category.name,
      path: `/store/category/${category._id}`,
    };
  });

  useEffect(() => {
    if (data) {
      dispatch(updateCategory(data.categories));
    }
  }, [data, dispatch]);

  return (
    <div className='w-full md:w-3/12'>
      <div className='bg-white border p-3 shadow-lg mb-4 md:mb-0'>
        <h2 className='text-2xl border-b-2 font-semibold pb-4'>Categories</h2>
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
      </div>
    </div>
  );
};

export default CategoriesCard;
