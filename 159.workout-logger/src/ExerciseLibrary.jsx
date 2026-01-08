import React from 'react';

function ExerciseLibrary({ exercises, onAddExercise, isLoading }) {
  if (isLoading) return <div className="panel"><h3>Loading Library...</h3></div>;
  
  return (
    <div className="panel">
      <h3>Exercise Library</h3>
      <ul className="list">
        {exercises.map(ex => (
          <li key={ex.id} className="list-item">
            <span>{ex.name} <strong>({ex.muscle})</strong></span>
            <button onClick={()=>onAddExercise(ex)}>+</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ExerciseLibrary;