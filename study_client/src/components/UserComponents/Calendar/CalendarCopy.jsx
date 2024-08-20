import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Calendar = ({dateStart, dateEnd}) => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [daysInMonth, setDaysInMonth] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    generateCalendar(currentYear, currentMonth);
  }, [currentYear, currentMonth]);

  useEffect(() => {
    console.log(dateStart, dateEnd);

  }, [dateStart, dateEnd])
  
  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Augosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const generateCalendar = (year, month) => {
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const totalDaysInMonth = new Date(year, month + 1, 0).getDate();

    const days = [];

    // Crear días vacíos antes del primer día del mes
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }

    // Crear días del mes
    for (let day = 1; day <= totalDaysInMonth; day++) {
      days.push(day);
    }

    setDaysInMonth(days);
  };

  const handlePreviousMonth = () => {
    setCurrentMonth((prevMonth) => {
      if (prevMonth === 0) {
        setCurrentYear((prevYear) => prevYear - 1);
        return 11;
      }
      return prevMonth - 1;
    });
  };

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => {
      if (prevMonth === 11) {
        setCurrentYear((prevYear) => prevYear + 1);
        return 0;
      }
      return prevMonth + 1;
    });
  };

  const handleDayClick = (day) => {
    if (day) {
      const date = new Date(currentYear, currentMonth, day);
      const options = {
        weekday: "long",
        year: "numeric",
        month: "numeric",
        day: "numeric",
      };
      setSelectedDate(date.toLocaleDateString(undefined, options));
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className=" w-full mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex items-center justify-between px-6 py-3 bg-gray-700">
          <button onClick={handlePreviousMonth} className="text-white">
            Anterior
          </button>
          <h2 className="text-white">
            {monthNames[currentMonth]} {currentYear}
          </h2>
          <button onClick={handleNextMonth} className="text-white">
            Siguiente
          </button>
        </div>
        <div className="grid grid-cols-7 gap-2 p-4">
          {["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"].map((dayName) => (
            <div key={dayName} className="text-center font-semibold">
              {dayName}
            </div>
          ))}
          {daysInMonth.map((day, index) => (
            <div
              key={index}
              className={`text-center py-2 border cursor-pointer ${
                day &&
                new Date().getFullYear() === currentYear &&
                new Date().getMonth() === currentMonth &&
                new Date().getDate() === day
                  ? "bg-blue-500 text-white"
                  : ""
              }`}
              onClick={() => handleDayClick(day)}
            >
            
              {day}
            </div>
          ))}
          
        </div>
        {isModalOpen && (
          <div className="modal fixed inset-0 flex items-center justify-center z-50">
            <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>
            <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
              <div className="modal-content py-4 text-left px-6">
                <div className="flex justify-between items-center pb-3">
                  <p className="text-2xl font-bold">Selected Date</p>
                  <button
                    onClick={handleCloseModal}
                    className="modal-close px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring"
                  >
                    ✕
                  </button>
                </div>
                <div className="text-xl font-semibold">{selectedDate}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calendar;




// import { useState, useEffect } from "react";

// // eslint-disable-next-line react/prop-types
// const Calendar = ({dateStart, dateEnd}) => {
//   const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
//   const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
//   const [daysInMonth, setDaysInMonth] = useState([]);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     generateCalendar(currentYear, currentMonth);
//   }, [currentYear, currentMonth]);

//   useEffect(() => {
//     console.log(dateStart, dateEnd);

//   }, [dateStart, dateEnd])
  
//   const monthNames = [
//     "Enero",
//     "Febrero",
//     "Marzo",
//     "Abril",
//     "Mayo",
//     "Junio",
//     "Julio",
//     "Augosto",
//     "Septiembre",
//     "Octubre",
//     "Noviembre",
//     "Diciembre",
//   ];

//   const generateCalendar = (year, month) => {
//     const firstDayOfMonth = new Date(year, month, 1).getDay();
//     const totalDaysInMonth = new Date(year, month + 1, 0).getDate();

//     const days = [];

//     // Crear días vacíos antes del primer día del mes
//     for (let i = 0; i < firstDayOfMonth; i++) {
//       days.push(null);
//     }

//     // Crear días del mes
//     for (let day = 1; day <= totalDaysInMonth; day++) {
//       days.push(day);
//     }

//     setDaysInMonth(days);
//   };

//   const handlePreviousMonth = () => {
//     setCurrentMonth((prevMonth) => {
//       if (prevMonth === 0) {
//         setCurrentYear((prevYear) => prevYear - 1);
//         return 11;
//       }
//       return prevMonth - 1;
//     });
//   };

//   const handleNextMonth = () => {
//     setCurrentMonth((prevMonth) => {
//       if (prevMonth === 11) {
//         setCurrentYear((prevYear) => prevYear + 1);
//         return 0;
//       }
//       return prevMonth + 1;
//     });
//   };

//   const handleDayClick = (day) => {
//     if (day) {
//       const date = new Date(currentYear, currentMonth, day);
//       const options = {
//         weekday: "long",
//         year: "numeric",
//         month: "numeric",
//         day: "numeric",
//       };
//       setSelectedDate(date.toLocaleDateString(undefined, options));
//       setIsModalOpen(true);
//     }
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className=" w-full mx-auto p-4">
//       <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//         <div className="flex items-center justify-between px-6 py-3 bg-gray-700">
//           <button onClick={handlePreviousMonth} className="text-white">
//             Anterior
//           </button>
//           <h2 className="text-white">
//             {monthNames[currentMonth]} {currentYear}
//           </h2>
//           <button onClick={handleNextMonth} className="text-white">
//             Siguiente
//           </button>
//         </div>
//         <div className="grid grid-cols-7 gap-2 p-4">
//           {["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"].map((dayName) => (
//             <div key={dayName} className="text-center font-semibold">
//               {dayName}
//             </div>
//           ))}
//           {daysInMonth.map((day, index) => (
//             <div
//               key={index}
//               className={`text-center py-2 border cursor-pointer ${
//                 day &&
//                 new Date().getFullYear() === currentYear &&
//                 new Date().getMonth() === currentMonth &&
//                 new Date().getDate() === day
//                   ? "bg-blue-500 text-white"
//                   : ""
//               }`}
//               onClick={() => handleDayClick(day)}
//             >
            
//               {day}
//             </div>
//           ))}
          
//         </div>
//         {isModalOpen && (
//           <div className="modal fixed inset-0 flex items-center justify-center z-50">
//             <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>
//             <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
//               <div className="modal-content py-4 text-left px-6">
//                 <div className="flex justify-between items-center pb-3">
//                   <p className="text-2xl font-bold">Selected Date</p>
//                   <button
//                     onClick={handleCloseModal}
//                     className="modal-close px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring"
//                   >
//                     ✕
//                   </button>
//                 </div>
//                 <div className="text-xl font-semibold">{selectedDate}</div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Calendar;
