import { useState } from "react";
import AddCategoryModal from "../components/Modals/AddCategoryModal";

const Admin = () => {
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  return (
    <div className="flex-1">
      <h1>Admin</h1>
      <button
        className='bg-blue-600 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
        type='button'
        onClick={() => setShowCategoryModal(true)}
      >
        Open regular modal
      </button>
      {showCategoryModal && <AddCategoryModal setShowModal={setShowCategoryModal} />}
    </div>
  );
};

export default Admin;
