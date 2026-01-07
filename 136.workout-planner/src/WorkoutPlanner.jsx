import React, { useState } from 'react';
import './WorkoutPlanner.css';

function WorkoutPlanner({ library }) {
  const [workoutPlan, setWorkoutPlan] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // A derived list of exercises based on the selected category
  const filteredLibrary = library.filter(item=>item.category.includes(selectedCategory === 'All' ? '' : selectedCategory)); // This is missing filtering logic
  
  const handleAddExercise = (exerciseToAdd) => {
    // Logic to add an exercise to the plan
     const isIncludes=workoutPlan.some(item=>item.id == exerciseToAdd.id)
     if(!isIncludes){
        setWorkoutPlan(prev=>[...prev, exerciseToAdd]);
     }
  };
  
  const handleRemoveExercise = (exerciseIdToRemove) => {
    // Logic to remove an exercise from the plan is missing
    setWorkoutPlan(prev=>prev.filter(item=>item.id !== exerciseIdToRemove.id))
  };

  const categories = ['All', 'Chest', 'Legs', 'Back', 'Arms', 'Core', 'Shoulders'];

  return (
    <div className="workout-planner-container">
      <div className="library-panel">
        <h3>Exercise Library</h3>
        <div className="category-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={cat === selectedCategory ? 'active' : ''}
              onClick={()=>setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <ul className="exercise-list">
          {filteredLibrary.map(exercise => (
            <li key={exercise.id}>
              {exercise.name}
              <button className="add-btn" onClick={() => handleAddExercise(exercise)}>+</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="plan-panel">
        <h3>My Workout Plan</h3>
        <ul className="workout-plan-list">
          {workoutPlan.map(exercise => (
            <li key={exercise.id}>
              {exercise.name}
              <button className="remove-btn" onClick={()=>handleRemoveExercise(exercise)}>&times;</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WorkoutPlanner;