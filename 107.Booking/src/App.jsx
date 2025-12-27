import React, { useState } from 'react';
import BookingCalendar from './BookingCalendar';
import './App.css';

// A mock array of dates that are already booked
const alreadyBooked = [
  new Date(2025, 10, 20), // Note: Months are 0-indexed (10 = November)
  new Date(2025, 10, 21),
  new Date(2025, 11, 5),  // December 5th
];

function App() {
  const [selection, setSelection] = useState({ start: null, end: null });

  return (
    <div className="container">
      <header>
        <h1>Buggy Booking Calendar</h1>
        <p>Try to select a date range. You shouldn't be able to select booked dates.</p>
      </header>
      <main className="booking-widget">
        <BookingCalendar bookedDates={alreadyBooked} value={selection} onChange={setSelection} />
        <div className="selection-display">
          <p><strong>Check-in:</strong> {selection.start ? selection.start.toDateString() : 'None'}</p>
          <p><strong>Check-out:</strong> {selection.end ? selection.end.toDateString() : 'None'}</p>
        </div>
      </main>
    </div>
  );
}

export default App;