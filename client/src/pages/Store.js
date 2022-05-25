import { Link } from "react-router-dom";
import pic1 from "../assets/categories/dogs/accessories/bandanas.jpg";
import pic2 from "../assets/categories/dogs/accessories/food_bottle.jpg";
import pic3 from "../assets/categories/dogs/accessories/out_set.jpg";
import pic4 from "../assets/categories/dogs/accessories/portable.jpg";
import pic5 from "../assets/categories/dogs/accessories/towel.jpg";
import pic6 from "../assets/categories/dogs/care/clippers.jpg";
import pic7 from "../assets/categories/dogs/care/ear_wipes.jpg";
import pic8 from "../assets/categories/dogs/care/oil.jpg";
import pic9 from "../assets/categories/dogs/care/paw_cleaner.jpg";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: "10.99",
    url: pic1,
  },
  {
    id: 2,
    name: "Product 2",
    price: "22.99",
    url: pic2,
  },
  {
    id: 3,
    name: "Product 3",
    price: "25.99",
    url: pic3,
  },
  {
    id: 4,
    name: "Product 4",
    price: "30.99",
    url: pic4,
  },
  {
    id: 5,
    name: "Product 5",
    price: "15.99",
    url: pic5,
  },
  {
    id: 6,
    name: "Product 6",
    price: "59.99",
    url: pic6,
  },
  {
    id: 7,
    name: "Product 7",
    price: "25.99",
    url: pic7,
  },
  {
    id: 8,
    name: "Product 8",
      price: "8.99",
    url: pic8,
  },
  {
    id: 9,
    name: "Product 9",
      price: "9.99",
    url: pic9,
  },
];

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
  return (
    <div className="mt-4">
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
                    <Link to={category.path}>
                      <li
                        key={index}
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
                      <div className="font-bold text-xl mb-2">
                        {product.name}
                      </div>
                      <p className="text-gray-700 font-semibold">
                        ${product.price}
                      </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      <button className="ml-1 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent">
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
