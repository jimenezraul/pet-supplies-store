import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="flex-1">
      <div className="container mx-auto px-4 py-8">
        <h1>Product Details</h1>
        <p>Product ID: {id}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
