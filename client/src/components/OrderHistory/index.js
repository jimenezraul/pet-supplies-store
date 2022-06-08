import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const OrderHistory = () => {
  const { orders } = useSelector((state) => state.store.user);

  return (
    <div>
      <h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white border-b pb-5'>
        Orders History
      </h5>
      <div className='flex flex-col items-center'>
        {orders?.length > 0 ? (
          orders.map((order, index) => {
            return (
              <div key={index} className='flex flex-col w-full'>
                <h6 className='text-md mt-3 font-medium text-gray-900 dark:text-white border-b pb-5'>
                  Purchased Date:{" "}
                  {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                </h6>
                <div className='w-full flex flex-col'>
                  {order.products.map((product, index) => {
                    const lastProduct = index === order.products.length - 1;
                    return (
                      <div
                        key={index}
                        className={`flex py-2 ${!lastProduct && "border-b"}`}
                      >
                        <div className='w-2/12'>
                          <img
                            className='h-20 w-20'
                            src={product.image_url}
                            alt={product.name}
                          />
                        </div>
                        <div className='w-10/12 flex justify-between'>
                          <Link to={`/store/product/${product._id}`}>
                            <div className='font-bold text-xl mb-2 hover:text-blue-700 hover:underline'>
                              {product.name}
                            </div>
                          </Link>
                          <p className='text-gray-700 font-semibold'>
                            ${product.price}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })
        ) : (
          <div className='w-full text-center'>
            <h5 className='py-4 border-b mb-1 text-xl font-medium text-gray-900 dark:text-white'>
              {" "}
              No Orders Found{" "}
            </h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderHistory;
