import { Meal } from "@/storage/meal/mealCreate";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      stats: undefined;
      meal: {
        card?: Meal
        editMode?: boolean
      };
      view: {
        card: Meal
      };
      dietMessage: {
        diet: boolean;
      };
    }
  }
}