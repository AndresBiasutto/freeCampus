import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";

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
        className=" flex justify-center items-center h-6 w-6 rounded-xl bg-light-redBtn hover:bg-light-redBtnHvr dark:bg-dark-redBtn dark:hover:bg-dark-redBtnHvr text-light-text dark:text-dark-text"      >
        <MdDeleteOutline />
      </button>
      {showModal && (
        <div className="absolute left-0 flex items-center justify-center">
          <div className=" bg-light-lightBackground dark:bg-dark-darkBackground p-4 rounded-lg shadow-lg flex justify-around items-center flex-col">
            <h2 className=" text-light-text dark:text-dark-text mb-2" >Todos los datos relacionados tambien seran borrados</h2>
            <div className=" w-auto flex flex-row items-center justify-between gap-4">
            <button
            onClick={() => deleteHandler(subjectId)}
             className=" flex justify-center items-center h-6 w-6 rounded-xl bg-red-300 hover:bg-red-400 text-dark-text dark:text-light-text">
                <MdDeleteOutline />
             </button>
              <button
                onClick={toggleModal}
                className=" flex justify-center items-center h-6 w-6 rounded-xl bg-gray-500 hover:bg-gray-600 text-dark-text dark:text-light-text"
              >
                <MdOutlineCancel />
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
