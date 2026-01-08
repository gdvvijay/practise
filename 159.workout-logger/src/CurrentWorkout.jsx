import React from 'react';

function CurrentWorkout({ workout, onUpdate, onRemove, onSave }) {
  return (
    <div className="panel">
      <h3>Current Workout</h3>
      <div className="list workout-list">
        {workout.map(ex => (
          <div key={ex.instanceId} className="workout-exercise">
            <h4>{ex.name} <button onClick={()=>onRemove(ex.instanceId)} className="remove-btn">&times;</button></h4>
            <div className="details">
              <label>Sets</label>
              <input type="number" value={ex.sets} onChange={(e) => onUpdate(ex.instanceId , 'sets', e.target.value)} />
              <label>Reps</label>
              <input type="number" value={ex.reps} onChange={(e) => onUpdate(ex.instanceId , 'reps', e.target.value)} />
              <label>Weight</label>
              <input type="number" value={ex.weight} onChange={(e) => onUpdate(ex.instanceId , 'weight', e.target.value)} />
            </div>
          </div>
        ))}
      </div>
      <button className="save-btn" onClick={onSave}>Save Workout</button>
    </div>
  );
}
export default CurrentWorkout;