
// eslint-disable-next-line react/prop-types
const MenuBtn = ({toggle ,  show}) => {

  return (
    <button onClick={toggle} className={`cursor-pointer md:hidden h-10 w-10 mr-2 bg-light-background dark:bg-dark-background flex flex-col justify-center items-center ${show? "gap-0": "gap-1"} rounded-tl-lg rounded-br-lg border-2 border-light-border dark:border-dark-border md:hover:shadow-custom`}>
      <div className="h-2 w-5 bg-light-border dark:bg-dark-border rounded-tl-lg rounded-br-lg "></div>
      <div className="h-2 w-5 bg-light-border dark:bg-dark-border rounded-tl-lg rounded-br-lg "></div>
      <div className="h-2 w-5 bg-light-border dark:bg-dark-border rounded-tl-lg rounded-br-lg "></div>
    </button>
  );
};

export default MenuBtn;
