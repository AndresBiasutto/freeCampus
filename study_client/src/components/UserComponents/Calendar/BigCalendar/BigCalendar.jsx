/* eslint-disable react/prop-types */
// BigCalendar.jsx
import { useEffect, useState } from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css"; 
import { CiCalendarDate } from "react-icons/ci";
import "dayjs/locale/es";
import BigCalendarModal from "./BigCalendarModal";
import { useSelector } from "react-redux";

dayjs.locale("es");

const BigCalendar = ({ id, dateStart, dateEnd, subjectName, examDates}) => {
  const {role}= useSelector(state=> state.auth)
  const localizer = dayjsLocalizer(dayjs);
  const [openModal, setOpenModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Configurar el evento del semestre
    const semesterEvent = {
      start: dayjs(dateStart).toDate(),
      end: dayjs(dateEnd).add(1, "days").toDate(),
      title: subjectName,
      color: '#4CAF50', // Color para el evento del semestre
    };

    // Configurar los eventos de exámenes
    let examEvents = [];
    if (Array.isArray(examDates) && examDates.length > 0) {
      examEvents = examDates.map((exam, index) => ({
        start: dayjs(exam.date).toDate(),
        end: dayjs(exam.date).add(1, "days").toDate(),
        title: exam.name,
        color: getColor(index),
      }));
    }

    // Combinar los eventos del semestre y los eventos de exámenes
    setEvents([semesterEvent, ...examEvents]);

    return () => {
      setEvents([]); // Limpiar el estado de los eventos al desmontar el componente
    };
  }, [dateStart, dateEnd, subjectName, examDates]);

  const handleSelectSlot = ({ start }) => {
    setSelectedDate(start);
    setOpenModal(true);
  };

  const getColor = (index) => {
    const colors = ['#FF5722', '#2196F3', '#FFC107', '#E91E63', '#9C27B0']; // Más colores si es necesario
    return colors[index % colors.length];
  };

  const components = {
    event: ({ title, event }) => {
      return (
        <div
          className=" h-3 flex flex-row justify-center items-center gap-2 bg-light-background dark:bg-dark-background hover:h-5 transition-all"
          style={{ backgroundColor: event.color }}
        >
          {title} <CiCalendarDate />
        </div>
      );
    },
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
        events={events}  // Todos los eventos combinados en un solo array
        style={{ height: "100vh", width: "100%" }}
        toolbar={true}
        components={components}  // Un solo objeto de componentes personalizados
        selectable={true}
        popup={true}
        onSelectSlot={role === "teacher" && handleSelectSlot}
        formats={{
          monthHeaderFormat: (date) => {
            return dayjs(date).format("DD/MM/YYYY");
          },
        }}

      />
      <BigCalendarModal
        id={id}
        openModal={openModal}
        setOpenModal={setOpenModal}
        selectedDate={selectedDate}
      />
    </div>
  );
};

export default BigCalendar;
