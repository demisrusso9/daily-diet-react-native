import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "../config";

export async function mealGetAll() {
  const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

  return storage ? JSON.parse(storage) : [];
}