// components/SearchUser.js
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterUsers,
  clearUserSearch,
} from "../../../redux/actions/userActions";
import SearchList from "../StudentsTableMolecules/SearchList";
import { Spinner } from "flowbite-react";
import useToggleModal from "../../../hooks/useToggleModal";
import useOutsideClick from "../../../hooks/useOutsideClick"; // Import the hook

const SearchUser = () => {
  const {token}= useSelector(state =>state.auth)
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Estado para el indicador de carga
  const dispatch = useDispatch();
  const { showModal, handleToggleModal } = useToggleModal(); // Toggle modal
  const inputRef = useRef(null);
  const listRef = useRef(null);

  // Obtener los usuarios filtrados desde el store de Redux
  const filteredUsers = useSelector((state) => state.users.studentSearch);

  // Cerrar la lista si se hace clic fuera de ella
  useOutsideClick(listRef, () => {
    if (showModal) {
      handleToggleModal(); // Cerrar la lista
    }
  });

  // Debounce para retrasar la búsqueda hasta que el usuario haya dejado de escribir
  useEffect(() => {
    if (searchTerm) {
      setIsLoading(true);

      const delayDebounceFn = setTimeout(() => {
        dispatch(filterUsers(searchTerm, token)).finally(() => {
          setIsLoading(false); // Ocultar el indicador de carga cuando la búsqueda termine
        });
      }, 500);

      return () => clearTimeout(delayDebounceFn); // Limpiar el timeout si el usuario escribe más
    } else {
      dispatch(clearUserSearch());
      setIsLoading(false); // Asegurarse de ocultar el indicador si se limpia la búsqueda
    }
  }, [searchTerm, dispatch]);

  // Manejar cambios en el input de búsqueda
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    if (!showModal) {
      handleToggleModal(); // Mostrar la lista cuando el usuario comienza a escribir
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <input
        ref={inputRef} // Referencia al input
        type="text"
        placeholder="Buscar usuarios por nombre..."
        value={searchTerm}
        onChange={handleSearchChange}
        className=" relative w-full p-2 bg-light-lightBackground dark:bg-dark-darkBackground rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={handleToggleModal} // Mostrar la lista cuando el input es clicado
      />

      {/* Mostrar el indicador de carga mientras se realiza la búsqueda */}
      {isLoading && <Spinner className="absolute top-2 right-1" />}

      {/* Mostrar la lista de usuarios solo si showModal está activo */}
      {showModal && (
        <ul
          ref={listRef} // Referencia a la lista
          className="absolute top-full left-0 right-0 bg-light-lightBackground dark:bg-dark-darkBackground border-gray-300 rounded-md mt-1 z-10 max-h-60 overflow-auto"
        >
          {!isLoading && filteredUsers && filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <SearchList user={user} key={user.id} />
            ))
          ) : !isLoading && searchTerm ? (
            <li className="p-2 text-gray-500">No se encontraron usuarios</li>
          ) : null}
        </ul>
      )}
    </div>
  );
};

export default SearchUser;
