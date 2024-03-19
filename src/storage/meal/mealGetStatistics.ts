import { MealType } from "@/@interface/meal";
import { mealGetAll } from "./mealGetAll";

export interface StatsProps {
  totalMeals: number
  totalInDiet: number
  totalOffDiet: number
  percentage: number
  totalInDietSequence: number
}

export async function mealGetStatistics(): Promise<StatsProps> {
  const storage = await mealGetAll()

  const totalMeals = storage.length
  const totalInDiet = storage.filter((meal: MealType) => meal.diet).length
  const totalOffDiet = storage.filter((meal: MealType) => !meal.diet).length
  const percentage = Number(Math.round((totalInDiet / totalMeals) * 100).toFixed(2))

  let maxSequence = 0
  const totalInDietSequence = storage.reduce((acc: number, curr: MealType) => {
    if (curr.diet) {
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