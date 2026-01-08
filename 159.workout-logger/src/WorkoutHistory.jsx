import React from 'react';

function WorkoutHistory({ history }) {
  return (
    <div className="panel history-panel">
      <h3>Workout History</h3>
      {history.map(workout => (
        <div key={workout.id} className="history-item">
          <strong>{workout.date}</strong>
        </div>
      ))}
    </div>
  );
}
export default WorkoutHistory;