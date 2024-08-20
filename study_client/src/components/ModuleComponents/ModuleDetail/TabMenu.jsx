import PropTypes from 'prop-types';

const TabMenu = ({ activeTab, showTab }) => (
  <ul className=" rounded-lg w-full md:w-3/5 flex flex-row items-center justify-start">
    <li onClick={() => showTab(1)} className="me-2">
      <button
        aria-current="page"
        className={`inline-block p-4 ${
          activeTab === 1
            ? "bg-light-background dark:bg-dark-background"
            : "bg-light-accent dark:bg-dark-accent hover:bg-light-background dark:hover:bg-dark-background"
        } rounded-t-lg text-sky-100`}
      >
        Lecture
      </button>
    </li>
    <li onClick={() => showTab(2)} className="me-2">
      <button
        className={`inline-block p-4 ${
          activeTab === 2
            ? "bg-light-background dark:bg-dark-background"
            : "bg-light-accent dark:bg-dark-accent hover:bg-light-background dark:hover:bg-dark-background"
        } rounded-t-lg text-sky-100`}
      >
        Material adicional
      </button>
    </li>
  </ul>
);

TabMenu.propTypes = {
  activeTab: PropTypes.number.isRequired,
  showTab: PropTypes.func.isRequired,
};

export default TabMenu;
