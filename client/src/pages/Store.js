import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/Store/storeSlice";

const categories = [
  {
    name: "Dog",
    path: "/store/dog",
  },
  {
    name: "Cat",
    path: "/store/cat",
  },
  {
    name: "Fish",
    path: "/store/fish",
  },
  {
    name: "Hamster",
    path: "/store/hamster",
  },
  {
    name: "Bird",
    path: "/store/bird",
  },
];

const Store = () => {
  const products = useSelector((state) => state.store.products);
  const dispatch = useDispatch();
  const addToCartHandler = (e) => {
    console.log(e);
    dispatch(addToCart(e));
  };
  return (
    <div className="mt-4 flex-1">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center md:space-x-2">
          <div className="w-full md:w-3/12">
            <div className="bg-white border p-3 shadow-lg mb-4 md:mb-0">
              <h2 className="text-2xl border-b-2 font-semibold pb-4">
                Categories
              </h2>
              <ul className="list-reset">
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
          <div className="w-full md:w-8/12 mb-5">
            <div className="bg-white border rounded shadow-lg flex flex-wrap">
              {products.map((product, index) => (
                <div
                  className="w-6/12 lg:w-4/12 flex justify-center p-2"
                  key={index}
                >
                  <div className="max-w-sm rounded overflow-hidden">
                    <img
                      className="h-52 mx-auto"
                      src={product.url}
                      alt={product.name}
                    />
                    <div className="px-6 py-4">
                      <Link to={`/store/product/${product.id}`}>
                        <div className="font-bold text-xl mb-2 hover:text-blue-700 hover:underline">
                          {product.name}
                        </div>
                      </Link>
                      <p className="text-gray-700 font-semibold">
                        ${product.price}
                      </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      <button
                        onClick={() => addToCartHandler(product)}
                        className="ml-1 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
