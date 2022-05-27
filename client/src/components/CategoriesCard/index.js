import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CategoriesCard = () => {
  let categories = useSelector((state) => state.store.categories);
  categories = categories.map((category) => {
    return {
      name: category.name,
      path: `/store/category/${category._id}`,
    };
  });

  return (
    <div className='w-full md:w-3/12'>
      <div className='bg-white rounded border p-3 shadow-lg mb-4 md:mb-0'>
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
