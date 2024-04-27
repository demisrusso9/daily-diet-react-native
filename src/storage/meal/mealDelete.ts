import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealGetAll } from "./mealGetAll";
import { MEAL_COLLECTION } from "../config";
import { IMeal } from "@/@interface/meal";

export async function mealDelete(id: string) {
  const storage = await mealGetAll()

  const filtered = storage.filter((item: IMeal) => item.id !== id)

  await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(filtered))
}