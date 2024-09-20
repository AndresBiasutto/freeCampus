import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import PropTypes from "prop-types";
import { updateUser } from "../../../redux/actions/userActions";
import UserImg from "../UserDetail/UserImg";

const EditUserSettingsForm = ({ handleToggleModal, showModal }) => {
  const { token, id,image, name, contactNumber, description } = useSelector(
    (state) => state.auth
  );
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    description: "",
    image: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value !== "" ? value : null,
    });
  };
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const errors = validate();
  //     if (Object.keys(errors).length > 0) {
  //       setErrors(errors);
  //       return;
  //     }
  //     dispatch(updateUser(id, data))
  //     dispatch(getOneUser(id))
  //   };
  const handleUpdatedSubject = (e) => {
    e.preventDefault();
    const updateData = {};
    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        updateData[key] = formData[key];
      }
    });
    if (Object.keys(updateData).length > 0) {
      dispatch(updateUser(id, updateData, token));
    }
    handleToggleModal(!showModal);
  };
  return (
    <form
      onSubmit={handleUpdatedSubject}
      className="h-full w-full flex flex-col items-center justify-center rounded-lg gap-1"
    >
    <UserImg image={image} name={name} />
      <input
        name="image"
        className="h-7 w-full rounded-lg"
        type="text"
        placeholder="cambiar imagen"
        value={formData.image || ""}
        onChange={handleChange}
      />
      <input
        name="name"
        className="h-7 w-full rounded-lg"
        type="text"
        placeholder={name}
        value={formData.name || ""}
        onChange={handleChange}
      />

      <input
        name="contactNumber"
        className="h-7 w-full rounded-lg"
        type="text"
        placeholder={
          contactNumber === null ? contactNumber : "tel: 11-444-2323"
        }
        value={formData.contactNumber || ""}
        onChange={handleChange}
      />

      <textarea
        name="description"
        className="h-28 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        placeholder={description === null ? description : "contanos sobre vós"}
        value={formData.description || ""}
        onChange={handleChange}
      />
      <button className="w-full bg-light-blueBtn hover:bg-light-blueBtnHvr dark:bg-dark-blueBtn dark:hover:bg-dark-blueBtnHvr rounded-lg text-light-text dark:text-dark-text">
        listo
      </button>
    </form>
  );
};
EditUserSettingsForm.propTypes = {
  subjectId: PropTypes.string,
  handleToggleModal: PropTypes.func,
  showModal: PropTypes.bool,
};
export default EditUserSettingsForm;

// import { useState } from 'react';
// import { useDispatch, useSelector } from "react-redux";
// import { getOneUser, updateUser } from '../../../redux/actions/userActions';

// const EditUserSettingsForm = () => {
//   const dispatch = useDispatch();
//   const {id}= useSelector(store => store.auth)
//   const [name, setName] = useState('');
//   const [contactNumber, setContactNumber] = useState('');
//   const [description, setDescription] = useState('');
//   const [image, setImage] = useState('');
//   const [errors, setErrors] = useState({});
//   const [form, setForm]= useState({
//     name: "",
//     contactNumber: "",
//     description: "",
//     image: ""
//   });

//   const validate = () => {
//     const errors = {};

//     if (!name || name.length < 3) {
//       errors.name = 'El nombre debe tener al menos 3 caracteres.';
//     }

//     const phoneRegex = /^[0-9]{2}-[0-9]{4}-[0-9]{4}$/;
//     if (!contactNumber || !phoneRegex.test(contactNumber)) {
//       errors.contactNumber = 'El número de contacto debe seguir el formato 22-3344-5555.';
//     }

//     const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
//     if (!image || !urlRegex.test(image)) {
//       errors.image = 'La URL de la imagen no es válida.';
//     }

//     if (!description || description.length < 10) {
//       errors.description = 'La descripción debe tener al menos 10 caracteres.';
//     }

//     return errors;
//   };

//   const data = {
//     name: name,
//     contactNumber: contactNumber,
//     description: description,
//     image: image,
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const errors = validate();
//     if (Object.keys(errors).length > 0) {
//       setErrors(errors);
//       return;
//     }
//     dispatch(updateUser(id, data))
//     dispatch(getOneUser(id))
//   };

//   return (
//     <form className=" w-full mx-auto pt-4" onSubmit={handleSubmit}>
//       <div className="mb-5 w-full">
//         <label
//           htmlFor="name"
//           className="block mb-2 text-sm font-medium text-light-text dark:text-dark-text"
//         >
//           Cambiar nombre
//         </label>
//         <input
//           type="text"
//           id="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className=" text-sm rounded-lg w-full p-2.5 "
//           placeholder="Ej: Jon Snow"
//           required
//         />
//         {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
//       </div>
//       <div className="mb-5">
//         <label
//           htmlFor="contactNumber"
//           className="block mb-2 text-sm font-medium text-light-text dark:text-dark-text"
//         >
//           Agregar número de contácto
//         </label>
//         <input
//           type="tel"
//           id="contactNumber"
//           value={contactNumber}
//           onChange={(e) => setContactNumber(e.target.value)}
//           className=" shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
//           placeholder="Ej: 22-3344-5555"
//           required
//         />
//         {errors.contactNumber && <p className="text-red-600 text-sm">{errors.contactNumber}</p>}
//       </div>
//       <div className="mb-5">
//         <label
//           htmlFor="image"
//           className="block mb-2 text-sm font-medium text-light-text dark:text-dark-text"
//         >
//           Cambiar imagen
//         </label>
//         <input
//           type="url"
//           id="image"
//           value={image}
//           onChange={(e) => setImage(e.target.value)}
//           className=" shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
//           placeholder="Ej: http://fb.com/jonTheChoosen"
//           required
//         />
//         {errors.image && <p className="text-red-600 text-sm">{errors.image}</p>}
//       </div>
//       <div className="mb-5">
//         <label
//           htmlFor="description"
//           className="block mb-2 text-sm font-medium text-light-text dark:text-dark-text"
//         >
//           Contános quien sós
//         </label>
//         <textarea
//           id="description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           className="h-28 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
//           placeholder="Ej: I'm a bastard!!"
//           required
//         />
//         {errors.description && <p className="text-red-600 text-sm">{errors.description}</p>}
//       </div>

//       <button
//         type="submit"
//         className="text-white bg-sky-700 hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
//       >
//         Confirmar cambios
//       </button>
//     </form>
//   );
// };

// export default EditUserSettingsForm;
