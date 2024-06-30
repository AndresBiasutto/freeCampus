import { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteSubject } from "../../redux/actions/subjectActions";
import PropTypes from "prop-types"

const DeleteSubjectBtn = ( props ) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const subjectId= props.subjectId;

  const toggleModal = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setShowModal(!showModal);
  }; 

  const deleteHandler = (subjectId) => {
    console.log(subjectId);
    dispatch(deleteSubject(subjectId));
    setShowModal(!showModal);
  };

  return (
    <div className="">
      <button
        onClick={toggleModal}
        type="button"
        className="text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2"
      >
        <i className="text-gray-100 text-lg">
          <RiDeleteBin6Fill />
        </i>
      </button>
      {showModal && (
        <div className=" z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg flex justify-around items-center flex-col">
            <h2>Are you sure you want to delete this subject?</h2>
            <div className=" w-auto flex flex-row items-center justify-between gap-4">
              <button
                onClick={() => deleteHandler(subjectId)}
                className="bg-red-500 text-white p-2 rounded-lg w-auto"
              >
                Yes, Delete
              </button>
              <button
                onClick={toggleModal}
                className="bg-gray-500 text-white p-2 rounded-lg w-25"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

DeleteSubjectBtn.propTypes = {
    subjectId: PropTypes.string.isRequired,

  };

export default DeleteSubjectBtn;
