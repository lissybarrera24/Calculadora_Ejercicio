interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

export const calculateExercises = (
  dailyHours: number[],
  target: number
): Result => {

  const periodLength = 7;

  const trainingDays = dailyHours.filter(day => day > 0).length;

  const totalHours = dailyHours.reduce((sum, day) => sum + day, 0);

  const average = totalHours / periodLength;

  const success = average >= target;

  let rating: number;
  let ratingDescription: string;

  if (average >= target) {
    rating = 3;
    ratingDescription = "Excelente, cumpliste tu objetivo 💪";
  } else if (average >= target * 0.7) {
    rating = 2;
    ratingDescription = "Vas bien, pero puedes mejorar 👍";
  } else {
    rating = 1;
    ratingDescription = "Necesitas esforzarte más 😅";
  }

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average
  };
};