import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './home.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateCategory, updateCurrentPage } from '../redux/Store/storeSlice';
import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from '../utils/queries';
import Loading from '../components/Loading';

const categories = [
  {
    url: '/assets/categories/dogs/dog.jpeg',
    name: 'Dog',
    path: '/store/dog',
  },
  {
    url: '/assets/categories/cats/cat.jpeg',
    name: 'Cat',
    path: '/store/cat',
  },
  {
    url: '/assets/categories/fish/fish.jpeg',
    name: 'Fish',
    path: '/store/fish',
  },
  {
    url: '/assets/categories/hamsters/hamster.jpeg',
    name: 'Hamster',
    path: '/store/hamster',
  },
  {
    url: '/assets/categories/parrots/parrot.jpeg',
    name: 'Bird',
    path: '/store/bird',
  },
];

const brands = [
  {
    name: 'American Journey',
    url: '/assets/homepage/brands/american-j.jpg',
  },
  {
    name: 'Blue Buffalo',
    url: '/assets/homepage/brands/blue.jpg',
  },
  {
    name: 'Fancy Feast',
    url: '/assets/homepage/brands/fancy-feast.jpg',
  },
  {
    name: 'Greenies',
    url: '/assets/homepage/brands/greenies.jpg',
  },
  {
    name: 'Hills',
    url: '/assets/homepage/brands/hills.jpg',
  },
  {
    name: 'Nexgard',
    url: '/assets/homepage/brands/nexgard.jpg',
  },
  {
    name: 'Nutro',
    url: '/assets/homepage/brands/nutro.jpg',
  },
  {
    name: 'Purina',
    url: '/assets/homepage/brands/purina.jpg',
  },
  {
    name: 'Royal Canin',
    url: '/assets/homepage/brands/royal-canin.jpg',
  },
  {
    name: 'Vibeful',
    url: '/assets/homepage/brands/vibeful.jpeg',
  },
];

const Home = () => {
  let categories_ids = useSelector((state) => state.store.categories);
  const dispatch = useDispatch();
  const { loading, data } = useQuery(GET_CATEGORIES);

  useEffect(() => {
    if (data) {
      dispatch(updateCategory(data.categories));
    }
  }, [data, dispatch]);

  categories_ids = categories_ids.map((category) => {
    return {
      name: category.name,
      path: `/store/category/${category._id}`,
    };
  });

  const dogImage = '/assets/homepage/dogs.png';

  return (
    <div className='flex flex-col flex-1'>
      {loading && <Loading />}
      <div className='container mx-auto pt-16'>
        <div className='flex flex-wrap-reverse'>
          <div className='w-full lg:w-1/2 flex flex-col justify-center p-6'>
            <h1 className='text-4xl lg:text-7xl font-bold text-gray-800'>
              ProPet
            </h1>
            <h2 className='text-xl lg:text-3xl font-bold text-gray-800'>
              Your One-Stop Shop for All Pet Supplies
            </h2>
            <p className='text-gray-600 lg:text-xl'>
              Find everything you need for your furry friend at ProPets - from
              food to toys to grooming supplies.
            </p>
            <Link to='/store'>
              <button
                onClick={() => dispatch(updateCurrentPage('store'))}
                className='text-2xl bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'
              >
                Shop Now
              </button>
            </Link>
          </div>
          <div className='w-full lg:w-1/2 relative'>
            <img
              className='w-full h-full object-cover z-[100] relative'
              src={dogImage}
              alt='dog'
              referrerPolicy='no-referrer'
            />
            <div className='absolute top-0 rounded-full left-0 w-full h-full bg-white backdrop-blur-lg shadow-xl border'></div>
          </div>
        </div>
      </div>
      <div className='bg-white mb-5'>
        <div className='container mx-auto'>
          <div className='p-2'>
            <p className='font-bold py-4 text-2xl'>Shop By Pet</p>
          </div>
          <div className='categories bg-white pb-5'>
            <div className='grid grid-cols-3 md:grid-cols-5 gap-4'>
              {categories.map((category, index) => (
                <Link
                  onClick={() => dispatch(updateCurrentPage('store'))}
                  to={`${
                    categories_ids.filter(
                      (category_id) => category_id.name === category.name
                    )[0]?.path
                  }`}
                  key={index}
                >
                  <div key={index} className='text-center mx-auto'>
                    <img
                      className='inline-flex w-44'
                      alt={category.name}
                      src={category.url}
                    />
                    <p className='mt-5 font-semibold text-lg'>
                      {category.name}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto px-4 mb-6'>
        <h3 className='text-2xl font-bold text-gray-800 py-6'>Top Brands</h3>

        <div className='grid grid-cols-2 gap-2 md:grid-cols-5'>
          {brands.map((brand, index) => (
            <div
              key={index}
              className='bg-white p-4 flex justify-center items-center rounded-lg shadow-lg border'
            >
              <img src={brand.url} alt={brand.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
