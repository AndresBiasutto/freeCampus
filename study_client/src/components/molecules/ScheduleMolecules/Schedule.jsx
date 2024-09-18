import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setScheduleTime } from "../../../redux/actions/subjectActions";
import PropTypes from "prop-types";

const Schedule = ({ subjectId, scheduleDates, subjectName }) => {
  const { role } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const [date, setDate] = useState({
    day: "",
    hour: "",
    subjectId,
    subjectName,
  });

  // Días de la semana: de lunes a sábado
  const daysOfWeek = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

  // Horas: de 06:00 a 23:00
  const hours = Array.from(
    { length: 18 },  // 23 - 6 + 1 = 18 horas
    (_, i) => `${String(i + 6).padStart(2, "0")}:00`  // Comienza en las 06:00
  );

  const handleClick = (day, hour) => {
    if (role === "teacher") {
      const updatedDate = {
        ...date,
        day,
        hour,
      };
      setDate(updatedDate);
      dispatch(setScheduleTime(updatedDate));
    }
  };

  return (
    <div className="w-full container mx-auto">
      <h3 className="text-xl font-bold leading-none text-light-text dark:text-dark-text mb-2">
        Horario
      </h3>
      <div className="w-full p-3 grid grid-cols-7 bg-light-lightBackground dark:bg-dark-darkBackground rounded-lg">
        {/* Empty cell in the top-left corner */}
        <div></div>

        {/* Days of the week header */}
        {daysOfWeek.map((day) => (
          <div
            key={day}
            className="text-center text-m border border-light-background dark:border-dark-background font-bold text-light-text dark:text-dark-text"
          >
            {day}
          </div>
        ))}

        {/* Hours and schedule grid */}
        {hours.map((hour, hourIndex) => (
          <React.Fragment key={hour}>
            {/* Hour column */}
            <div className=" text-left pl-2 font-medium border border-light-background dark:border-dark-background  text-light-text dark:text-dark-text">
              {hour}
            </div>
            {/* Time slots for each day */}
            {daysOfWeek.map((day, dayIndex) => (
              <div
                key={`${hour}-${day}`}
                className={` border-r border-b border-light-background dark:border-dark-background h-8 hover:bg-light-accent dark:hover:bg-dark-accent cursor-pointer transition
                  ${dayIndex === daysOfWeek.length - 1 ? "border-r-0" : ""} 
                  ${hourIndex === hours.length - 1 ? "border-b-0" : ""}`}
                onClick={() => handleClick(day, hour)}
              >
                {scheduleDates.map((date, i) =>
                  date.day === day && date.hour === hour ? (
                    <div
                      key={i}
                      alt={date.subjectName}
                      className="w-full h-full flex justify-center items-center text-xsm text-light-text dark:text-dark-text bg-light-background dark:bg-dark-background overflow-hidden "
                    >
                      {date.subjectName}
                    </div>
                  ) : null
                )}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

Schedule.propTypes = {
  subjectId: PropTypes.string,
  scheduleDates: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      hour: PropTypes.string,
      subjectName: PropTypes.string,
    })
  ).isRequired,
  subjectName: PropTypes.string,
  role: PropTypes.string,
};

export default Schedule;
