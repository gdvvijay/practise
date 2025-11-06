import React, { useState } from 'react';
import DatePicker from './DatePicker';
import './App.css';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="container">
      <header>
        <h1>Buggy Date Picker</h1>
        <p>
          Selected Date: {selectedDate ? selectedDate.toDateString() : 'None'}
        </p>
      </header>
      <main>
        <DatePicker onDateSelect={setSelectedDate} />
      </main>
    </div>
  );
}

export default App;