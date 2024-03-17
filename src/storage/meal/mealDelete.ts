import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealGetAll } from "./mealGetAll";
import { Meal } from "./mealCreate";
import { MEAL_COLLECTION } from "../config";

export async function mealDelete(id: string) {
  const storage = await mealGetAll()

  const filtered = storage.filter((item: Meal) => item.id !== id)

  await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(filtered))
}