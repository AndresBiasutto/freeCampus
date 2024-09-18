import PropTypes from "prop-types";
import { useEffect } from "react";
import { Accordion } from "flowbite-react";
import CardChapters from "../ModuleCard/CardChapter";
import CreateChapterBtn from "../../atoms/ModuleCardAtoms/buttons/CreateChapterBtn";
import { useSelector } from "react-redux";
import CardHeader from "./CardHeader";
import CardButtons from "./CardButtons";
import CardBody from "./CardBody";
import isTeacher from "../../../Libs/isTeacher"

const ModuleCard = ({ subjectModules }) => {
  const { role } = useSelector((store) => store.auth);
  useEffect(() => {}, [subjectModules]);

  return (
    <Accordion collapseAll className="w-full h-full border-none">
      {subjectModules &&
        subjectModules.map((module, i) => (
          <Accordion.Panel className="w-full h-full" key={i}>
            <Accordion.Title className="bg-light-primary hover:bg-light-accent dark:bg-dark-primary dark:hover:bg-dark-accent">
              <CardHeader moduleName={module.name} />
            </Accordion.Title>
            <Accordion.Content className="bg-light-lightBackground dark:bg-dark-darkBackground h-auto overflow-y-scroll">
              <div className="w-full flex flex-col justify-between items-end gap-2">
                {isTeacher(role) &&  <CardButtons moduleId={module.id} />}
                <CardBody
                  dateStart={module.dateStart}
                  dateEnd={module.dateEnd}
                  description={module.description}
                />
              </div>
              <ul className="h-36 flex flex-col justify-start items-center gap-3">
                {isTeacher(role) && (
                  <CreateChapterBtn id={module.id} className="h-auto" />
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

ModuleCard.propTypes = {
  subjectModules: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      chapters: PropTypes.array,
    })
  ).isRequired,
};

export default ModuleCard;
