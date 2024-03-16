import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "../config";
import { mealGetAll } from "./mealGetAll";

export interface Meal {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  diet: boolean;
}

export async function mealCreate(meal: Meal) {
  const storage = await mealGetAll()

  const updatedStorage = JSON.stringify([...storage, meal])

  await AsyncStorage.setItem(MEAL_COLLECTION, updatedStorage);
}