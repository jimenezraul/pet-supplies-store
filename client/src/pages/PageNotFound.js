import { Link } from "react-router-dom";

const PageNotFound = () => (
  <section className='flex items-center h-full p-16'>
    <div className='container flex flex-col items-center justify-center md:px-5 mx-auto'>
      <div className='max-w-md text-center bg-white p-10 md:p-20 rounded-lg shadow-lg border'>
        <h2 className='mb-8 font-extrabold text-9xl dark:text-gray-600'>
          <span className='sr-only'>Error</span>404
        </h2>
        <p className='text-2xl font-semibold md:text-3xl'>
          Sorry, we couldn't find this page.
        </p>
        <p className='mt-4 mb-8 dark:text-gray-400'>
          But dont worry, you can find plenty of other things on our Store.
        </p>
        <Link
          rel='noopener noreferrer'
          to={`/store`}
          className='px-8 py-3 font-semibold bg-blue-600 hover:bg-blue-700 text-white'
        >
          Back to Store
        </Link>
      </div>
    </div>
  </section>
);

export default PageNotFound;
