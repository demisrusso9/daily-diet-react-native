import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "../config";
import { mealGetAll } from "./mealGetAll";
import { IMeal } from "@/@interface/meal";

export async function mealEdit(meal: IMeal) {
  const storage: IMeal[] = await mealGetAll()

  const updatedStorage = storage.map((mealStorage) =>
    mealStorage.id === meal.id ? meal : mealStorage
  )

  await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(updatedStorage));
}