import { Restaurant } from "../models/Restaurant";
import { createContext } from "react";

export type RestaurantsContextType = {
  restaurants: Restaurant[];
};

export const RestaurantsContext = createContext<RestaurantsContextType>({
  restaurants: [],
});
