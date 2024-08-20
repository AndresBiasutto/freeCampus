import { Accordion } from "flowbite-react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import CardChapters from "./CardChapters";
import CreateChapterModal from "../ChapterComponents/CreateChapterModal";
import EditModuleBtn from "./EditModuleBtn";
import DeleteModuleBtn from "./DeleteModuleBtn";
import { useSelector } from "react-redux";

const ModuleCards = ({ subjectModules }) => {
  const { role} = useSelector((store) => store.auth);
  useEffect(() => {}, [subjectModules]);

  return (
    <Accordion collapseAll className="w-full h-full border-none">
      {subjectModules &&
        // eslint-disable-next-line react/prop-types
        subjectModules.map((module, i) => (
          <Accordion.Panel className="w-full h-full" key={i}>
            <Accordion.Title className=" bg-light-primary hover:bg-light-accent dark:bg-dark-primary dark:hover:bg-dark-accent">
              <div className="w-full">
                <p>{module.name}</p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  {module.description}
                </p>
              </div>
            </Accordion.Title>
            <Accordion.Content className=" bg-light-lightBackground dark:bg-dark-darkBackground h-auto overflow-y-scroll">
              <div className="w-full flex flex-col justify-between items-end gap-2">
                {role === "teacher" && (
                  <div className=" w-auto flex flex-row justify-center items-center gap-2">
                    <EditModuleBtn />
                    <DeleteModuleBtn moduleId={module.id} />
                  </div>
                )}

                <div className=" flex flex-col justify-center items-end gap-2">
                  <p className=" text-light-text dark:text-dark-text text-sm">
                    <span className=" text-gray-800 dark:text-gray-300">
                      Inicio:
                    </span>{" "}
                    {module.dateStart}{" "}
                  </p>
                  <p className=" text-light-text dark:text-dark-text text-sm">
                    <span className=" text-gray-800 dark:text-gray-300">
                      Final:
                    </span>{" "}
                    {module.dateEnd}{" "}
                  </p>
                </div>
              </div>
              <ul className=" h-36 flex flex-col justify-start items-center gap-3 ">
                {role === "teacher" && (
                  <CreateChapterModal id={module.id} className=" h-auto" />
                )}
                {module.chapters &&
                  module.chapters.map((chapter, i) => (
                    <CardChapters key={i} chapter={chapter} />
                  ))}
              </ul>
            </Accordion.Content>
          </Accordion.Panel>
        ))}
    </Accordion>
  );
};

ModuleCards.propTypes = {
  subjectModules: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    chapters: PropTypes.object,
  }).isRequired,
  role: PropTypes.string,
};

export default ModuleCards;
