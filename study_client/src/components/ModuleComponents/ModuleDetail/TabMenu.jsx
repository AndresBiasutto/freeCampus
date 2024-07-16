import PropTypes from 'prop-types';

const TabMenu = ({ activeTab, showTab }) => (
  <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
    <li onClick={() => showTab(1)} className="me-2">
      <button
        aria-current="page"
        className={`inline-block p-4 bg-gray-100 ${
          activeTab === 1 && "active bg-sky-800 text-sky-100"
        } rounded-t-lg hover:bg-sky-800 hover:text-sky-100`}
      >
        Lecture
      </button>
    </li>
    <li onClick={() => showTab(2)} className="me-2">
      <button
        className={`inline-block p-4 bg-gray-100 ${
          activeTab === 2 && "active bg-sky-800 text-sky-100"
        } rounded-t-lg hover:bg-sky-800 hover:text-sky-100`}
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