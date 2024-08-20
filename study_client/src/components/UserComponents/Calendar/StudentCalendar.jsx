import { useState, useEffect } from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { CiCalendarDate } from "react-icons/ci";
import "dayjs/locale/es";

dayjs.locale("es");

// eslint-disable-next-line react/prop-types
const StudentCalendar = ({ mySubjectSemesterDates = [], myExamDates = [] }) => {
  const localizer = dayjsLocalizer(dayjs);

  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Asegurarse de que mySubjectSemesterDates y myExamDates sean arrays
    const flatSemesterDates = Array.isArray(mySubjectSemesterDates) ? mySubjectSemesterDates.flat() : [];
    const flatExamDates = Array.isArray(myExamDates) ? myExamDates.flat() : [];

    // Configurar los eventos del semestre
    const semesterEvents = flatSemesterDates.map((date) => ({
      start: dayjs(date.dateStart).toDate(),
      end: dayjs(date.dateEnd).add(1, "days").toDate(),
      title: date.subjectName,
      color: '#4CAF50', // Color para los eventos del semestre
    }));

    // Configurar los eventos de exámenes
    const examEvents = flatExamDates.map((exam, index) => ({
      start: dayjs(exam.date).toDate(),
      end: dayjs(exam.date).add(1, "days").toDate(),
      title: exam.name,
      color: getColor(index),
    }));

    // Combinar todos los eventos en un solo array
    setEvents([...semesterEvents, ...examEvents]);

    return () => {
      setEvents([]); // Limpiar el estado de los eventos al desmontar el componente
    };
  }, [mySubjectSemesterDates, myExamDates]);

  const getColor = (index) => {
    const colors = ['#FF5722', '#2196F3', '#FFC107', '#E91E63', '#9C27B0']; // Colores para eventos de exámenes
    return colors[index % colors.length];
  };

  const components = {
    event: ({ title, event }) => (
      <div
        className="h-3 flex flex-row justify-center items-center gap-2 bg-light-background dark:bg-dark-background hover:h-5 transition-all"
        style={{ backgroundColor: event.color }}
      >
        {title} <CiCalendarDate />
      </div>
    ),
  };

  return (
    <div className="App w-full rounded-lg">
      <h3 className="text-xl font-bold leading-none text-light-text dark:text-dark-text mb-2">
        Calendario
      </h3>
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        views={["month"]}
        defaultView="month"
        events={events} // Todos los eventos combinados en un solo array
        style={{ height: "100vh", width: "100%" }}
        toolbar={true}
        components={components} // Un solo objeto de componentes personalizados
        selectable={true}
        max={10}
        popup={true}

        formats={{
          monthHeaderFormat: (date) => {
            return dayjs(date).format("MMMM YYYY");
          },
        }}
      />
    </div>
  );
};

export default StudentCalendar;
