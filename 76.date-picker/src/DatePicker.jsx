import React, {useState } from 'react';
import './DatePicker.css';

const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function DatePicker({ onDateSelect }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const today = new Date();

  // --- Calendar Calculation Fixes ---
  
  // Bug 1 Fix: Get the number of days in the *current* month by getting day 0 of the *next* month.
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysArray = [...Array(daysInMonth).keys()].map(i => i + 1);

  // Bug 5 Fix: Calculate the "padding" days needed at the start of the grid.
  const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0=Sun, 1=Mon, etc.
  const paddingDays = Array.from({ length: firstDayOfMonth }).fill(null);
  
  // --- Handler Fixes ---

  const goToPrevMonth = () => {
    // Bug 2 Fix: The date constructor handles year changes automatically.
    setCurrentDate(new Date(year, month - 1, 1));
  };
  
  const goToNextMonth = () => {
    // Bug 2 Fix: Was advancing by 2 months, should be 1.
    setCurrentDate(new Date(year, month + 1, 1));
  };
  
  const handleDateClick = (day) => {
    // Bug 3 Fix: Create the new date, update local state, and call the prop function.
    const newSelectedDate = new Date(year, month, day);
    setSelectedDate(newSelectedDate);
    onDateSelect(newSelectedDate); // Call the function passed from App
  };

  // Helper for date comparison
  const isSameDay = (d1, d2) => {
    return d1.getFullYear() === d2.getFullYear() &&
           d1.getMonth() === d2.getMonth() &&
           d1.getDate() === d2.getDate();
  };

  return (
    <div className="datepicker-container">
      <div className="datepicker-header">
        <button onClick={goToPrevMonth} className="nav-btn">‹</button>
        <h2>{MONTH_NAMES[month]} {year}</h2>
        <button onClick={goToNextMonth} className="nav-btn">›</button>
      </div>
      <div className="calendar-grid">
        {DAYS_OF_WEEK.map(day => (
          <div key={day} className="day-name">{day}</div>
        ))}

        {/* Render the empty padding divs */}
        {paddingDays.map((_, index) => <div key={`pad-${index}`} className="padding-day"></div>)}

        {daysArray.map(day => {
          const dayDate = new Date(year, month, day);
          
          // Bug 4 Fix: Compare dates by their components, not object reference.
          const isToday = isSameDay(dayDate, today);
          const isSelected = isSameDay(dayDate, selectedDate);
          
          return (
            <div
              key={day}
              className={`calendar-day ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''}`}
              onClick={() => handleDateClick(day)}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DatePicker;