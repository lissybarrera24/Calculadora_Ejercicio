import { calculateExercises } from "./calculateExercises";

const dailyHours = [3, 0, 2, 4.5, 0, 3, 1];
const target = 2;

const result = calculateExercises(dailyHours, target);

console.log("Resultado:", result);