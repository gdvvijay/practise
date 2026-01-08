import React, { useState, useEffect } from 'react';
import { fetchExerciseLibrary } from './mockApi';
import ExerciseLibrary from './ExerciseLibrary';
import CurrentWorkout from './CurrentWorkout';
import WorkoutHistory from './WorkoutHistory';
import './WorkoutLogger.css';

function WorkoutLogger() {
  const [library, setLibrary] = useState([]);
  const [currentWorkout, setCurrentWorkout] = useState([]);
  const [workoutHistory, setWorkoutHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchExerciseLibrary().then(data => {
        setIsLoading(false)
      setLibrary(data);
    //   console.log(data)
    });
  }, []);

  const handleAddExercise = (exercise) => {
    const exerciseWithDetails = {
      ...exercise,
      instanceId: Date.now(), // Unique key for this specific instance
      sets: 3,
      reps: 10,
      weight: 100
    };
    // currentWorkout.push(exerciseWithDetails); // Mutates state
    setCurrentWorkout(prev=>[...prev,exerciseWithDetails])
  };

  const handleUpdateExercise = (instanceId, field, value) => {
    setCurrentWorkout(prev=>prev.map(item=>item.instanceId === instanceId ? {...item,[field]:value}:item)); // Fails to trigger re-render
  };

  const handleRemoveExercise = (instanceId) => {
    // Logic is missing
    setCurrentWorkout(prev=>prev.filter(item=>item.instanceId != instanceId))
  };

  const handleSaveWorkout = () => {
    const newSavedWorkout = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      exercises: currentWorkout
    };
    setWorkoutHistory(prev=>[...prev,newSavedWorkout])
  };

  return (
    <div className="workout-logger">
      <ExerciseLibrary
        exercises={library}
        onAddExercise={handleAddExercise}
        isLoading={isLoading}
      />
      <CurrentWorkout
        workout={currentWorkout}
        onUpdate={handleUpdateExercise}
        onRemove={handleRemoveExercise}
        onSave={handleSaveWorkout}
      />
      <WorkoutHistory history={workoutHistory} />
    </div>
  );
}

export default WorkoutLogger;