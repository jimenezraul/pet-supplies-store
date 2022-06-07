import "./styles.css"

const Loading = () => {
  return (
    <>
      <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
        <div className='relative w-11/12 md:w-3/5 lg:w-4/12 flex justify-center my-6 mx-auto max-w-3xl'>
          {/*content*/}
                  <div className='h-72 w-72 p-12 border-0 rounded-lg shadow-lg relative flex flex-col justify-center bg-white outline-none focus:outline-none'>
                  <span className="loading h-24 w-24"></span>
                  </div>
        </div>
      </div>
      <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
    </>
  );
};

export default Loading;
