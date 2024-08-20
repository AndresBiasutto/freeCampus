import { useState } from "react";
import { CiEdit } from "react-icons/ci";
// import { useDispatch } from "react-redux";
// import { updateSubject } from "../../redux/actions/subjectActions";
import PropTypes from "prop-types";
import { useEffect } from "react";

const EditModuleBtn = (props) => {
  const { moduleId } = props;
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
//   const dispatch = useDispatch();

  useEffect(() => {}, [moduleId]);

  const toggleModal = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setShowModal(!showModal);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value !== "" ? value : null
    });
  };

  const handleUpdatedSubject = (e) => {
    e.preventDefault();
    const updateData = {};
    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        updateData[key] = formData[key];
      }
    });
    if (Object.keys(updateData).length > 0) {
    //   dispatch(updateSubject(moduleId, updateData));
    }
    setShowModal(!showModal);
  };

  return (
    <div className="">
      <button
        onClick={toggleModal}
        className="flex justify-center items-center h-6 w-6 rounded-xl bg-light-blueBtn hover:bg-light-blueBtnHvr dark:bg-dark-blueBtn dark:hover:bg-dark-blueBtnHvr text-light-text dark:text-dark-text"
      >
        <CiEdit />
      </button>
      {showModal && (
        <form
          onSubmit={handleUpdatedSubject}
          className="absolute top-28 left-4 h-full flex flex-col items-center justify-center rounded-lg gap-1"
        >
          <input
            name="name"
            className="h-7 rounded-lg"
            type="text"
            placeholder="cambiar nombre"
            value={formData.name || ""}
            onChange={handleChange}
          />
          <input
            name="description"
            className="h-7 rounded-lg"
            type="text"
            placeholder="cambiar descripción"
            value={formData.description || ""}
            onChange={handleChange}
          />
          <button className="w-full bg-light-blueBtn hover:bg-light-blueBtnHvr dark:bg-dark-blueBtn dark:hover:bg-dark-blueBtnHvr rounded-lg text-light-text dark:text-dark-text">
            listo
          </button>
        </form>
      )}
    </div>
  );
};

EditModuleBtn.propTypes = {
  moduleId: PropTypes.string.isRequired
};

export default EditModuleBtn;