import React from "react";
import PropTypes from "prop-types";

const StudentSchedule = ({ scheduleDates }) => {
  const daysOfWeek = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];
  const hours = Array.from(
    { length: 24 },
    (_, i) => `${String(i).padStart(2, "0")}:00`
  );

  return (
    <div className="w-full container mx-auto">
      <h3 className="text-xl font-bold leading-none text-light-text dark:text-dark-text mb-2">
        Horario
      </h3>
      <div className="w-full p-3 grid grid-cols-8 bg-light-lightBackground dark:bg-dark-darkBackground rounded-lg">
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
            <div className="text-left pl-2 font-medium border border-light-background dark:border-dark-background  text-light-text dark:text-dark-text">
              {hour}
            </div>
            {/* Time slots for each day */}
            {daysOfWeek.map((day, dayIndex) => (
              <div
                key={`${hour}-${day}`}
                className={`border-r border-b border-light-background dark:border-dark-background h-8 hover:bg-light-accent dark:hover:bg-dark-accent cursor-pointer transition
                  ${dayIndex === daysOfWeek.length - 1 ? "border-r-0" : ""} 
                  ${hourIndex === hours.length - 1 ? "border-b-0" : ""}`}
              >
                {scheduleDates &&
                  scheduleDates.map((dates) =>
                    dates.map((date, i) =>
                      date.day &&
                      date.hour &&
                      date.day === day &&
                      date.hour === hour ? (
                        <div
                          key={i}
                          alt={date.subjectName}
                          className="w-full h-full flex justify-center items-center text-xsm text-light-text dark:text-dark-text bg-light-background dark:bg-dark-background overflow-hidden "
                        >
                          {date.subjectName}
                        </div>
                      ) : null
                    )
                  )}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

StudentSchedule.propTypes = {
  scheduleDates: PropTypes.object,
  subjectName: PropTypes.string,
};

export default StudentSchedule;
