const UserCard = (props) => {
  const student= props.student;
  return (
    <div className="flex items-center space-x-4">
    <div className="flex-shrink-0">
      <img
        className="w-8 h-8 rounded-full"
        src={student.image}
        alt="Neil image"
      />
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
        {student.name}
      </p>
      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
        {student.email}
      </p>
    </div>
    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
      <button> ver perfil</button>
      <button> echar</button>
    </div>
  </div>
  );
};

export default UserCard;
