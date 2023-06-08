import { Restaurant } from "../models/Restaurant";
import { createContext } from "react";
import { restaurants } from "../data/data";

export type RestaurantsContextType = {
  restaurants: Restaurant[];
};


export const RestaurantsContext = createContext<RestaurantsContextType>({
  restaurants: [],
});


