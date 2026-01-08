const exerciseLibrary = [
  { id: 'ex1', name: 'Bench Press', muscle: 'Chest' },
  { id: 'ex2', name: 'Squat', muscle: 'Legs' },
  { id: 'ex3', name: 'Deadlift', muscle: 'Back' },
  { id: 'ex4', name: 'Overhead Press', muscle: 'Shoulders' },
  { id: 'ex5', name: 'Bicep Curl', muscle: 'Arms' },
  { id: 'ex6', name: 'Leg Press', muscle: 'Legs' },
  { id: 'ex7', name: 'Lat Pulldown', muscle: 'Back' },
  { id: 'ex8', name: 'Tricep Extension', muscle: 'Arms' },
];

export const fetchExerciseLibrary = () => {
  console.log('API: Fetching exercise library...');
  return new Promise(resolve => setTimeout(() => resolve(exerciseLibrary), 500));
};