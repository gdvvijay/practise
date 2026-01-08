import React from "react";
import WorkoutLogger from "./WorkoutLogger";
import "./App.css";
function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Workout Logger</h1>
        <p>Build a workout, log your sets/reps, and save it to your history.</p>
      </header>
      <main>
        <WorkoutLogger />
      </main>
    </div>
  );
}
export default App;
