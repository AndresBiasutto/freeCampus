import { useEffect, useState } from "react";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setExamDate } from "../../../../redux/actions/subjectActions";

// eslint-disable-next-line react/prop-types
const BigCalendarForm = ({ id, setOpenModal, selectedDate }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    date: selectedDate || new Date(), // Use selectedDate if available
    name: "",
    subjectId: id,
  });

  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      date: selectedDate, // Update the date when selectedDate changes
    }));
  }, [selectedDate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      dispatch(setExamDate(formData));
      console.log(formData);
      setNotification({
        type: "success",
        message: "fecha añadida correctamente",
      });
    } else {
      setErrors(formErrors);
      console.log(formErrors);

      setNotification({
        type: "error",
        message: "Please fix the errors in the form.",
      });
    }
    setTimeout(() => {
      setNotification(null);
      setOpenModal(false);
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="space-y-4">
        <div>
          <label
            htmlFor=""
            className="block mb-1 text-light-text dark:text-dark-text"
          >
            Fecha:
          </label>
          <h3 className=" py-2 text-light-text dark:text-dark-text">
            {selectedDate?.toString()}{" "}
          </h3>
          <label
            htmlFor="name"
            className="block mb-1 text-light-text dark:text-dark-text"
          >
            Nombre
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
          />
          {errors.name && <p className="text-red-500 h-3">{errors.name}</p>}
        </div>
      </div>
      <button
        type="submit"
        className="w-full flex flex-row justify-center items-center gap-4 mt-4 px-3 md:px-4 py-1 md:py-2 bg-sky-600 border border-sky-600 text-white rounded-lg hover:bg-sky-700"
      >
        Crear <MdOutlineContentPasteSearch />
      </button>
      {notification && (
        <div
          className={`mt-4 text-center py-2 rounded-md ${
            notification.type === "success"
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {notification.message}
        </div>
      )}
    </form>
  );
};

export default BigCalendarForm;
