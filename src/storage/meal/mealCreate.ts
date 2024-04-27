import AsyncStorage from "@react-native-async-storage/async-storage";
import { IMeal } from "@/@interface/meal";
import { MEAL_COLLECTION } from "../config";
import { mealGetAll } from "./mealGetAll";

export async function mealCreate(meal: IMeal) {
  const storage = await mealGetAll()

  const updatedStorage = JSON.stringify([...storage, meal])

  await AsyncStorage.setItem(MEAL_COLLECTION, updatedStorage);
}