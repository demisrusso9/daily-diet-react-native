import { IMeal } from "@/@interface/meal";
import { IStatistics } from "@/@interface/statistics";
import { mealGetAll } from "./mealGetAll";

export async function mealGetStatistics(): Promise<IStatistics> {
  const storage = await mealGetAll()

  const totalMeals = storage.length
  const totalInDiet = storage.filter((meal: IMeal) => meal.status).length
  const totalOffDiet = storage.filter((meal: IMeal) => !meal.status).length
  const percentage = Number(Math.round((totalInDiet / totalMeals) * 100).toFixed(2))

  let maxSequence = 0
  
  const totalInDietSequence = storage.reduce((acc: number, curr: IMeal) => {
    if (curr.status) {
      maxSequence++
      acc = Math.max(acc, maxSequence)
    } else {
      maxSequence = 0
    }

    return acc
  }, 0);

  return {
    totalMeals,
    totalInDiet,
    totalOffDiet,
    percentage,
    totalInDietSequence
  }
}