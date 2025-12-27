import React, { useState } from 'react';
import './BookingCalendar.css';

const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DAYS_OF_WEEK = ["S", "M", "T", "W", "T", "F", "S"];


function BookingCalendar({ bookedDates, value, onChange }) {
  // We'll hardcode the current month for simplicity
  const [currentDate] = useState(new Date(2025, 10, 1)); // November 2025

  const handleDayClick = (dayDate) => {
    // This is the core logic for selecting a start and end date
    if (!value.start) {
      onChange({ start: dayDate, end: null });
    } else if (value.start && !value.end) {
      onChange(prev=>({...prev, end: dayDate })); // Overwrites the start date
    } else {
      onChange({ start: dayDate, end: null });
    }
  };

  // --- Functions to generate the calendar grid ---
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const calendarDays = [];
  for (let i = 0; i < firstDayOfMonth; i++) calendarDays.push(null);
  for (let i = 1; i <= daysInMonth; i++) calendarDays.push(new Date(year, month, i));

  
  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h2>{MONTH_NAMES[month]} {year}</h2>
      </div>
      <div className="calendar-grid">
        {DAYS_OF_WEEK.map((day,i) => <div key={i}  className="day-name">{day}</div>)}
        
        {calendarDays.map((day, index) => {
          if (!day) return <div key={`empty-${index}`} className="empty-day"></div>;

          
          // Check the status of each day
          const isBooked = bookedDates.some((someDate)=>someDate.toString().includes(day)); // Incorrect date comparison
          const isInRange = false;
          const isSelected = false;

          return (
            <div
              key={day.toISOString()}
              className={`calendar-day ${isBooked ? 'booked' : ''} ${isInRange ? 'in-range' : ''} ${isSelected ? 'selected' : ''}`}
              onClick={()=>handleDayClick(day)}
            >
              {day.getDate()}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BookingCalendar;