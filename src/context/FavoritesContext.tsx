import React, { createContext, useContext, useState } from "react";
import { restaurants } from "../data/data";
import { Restaurant } from "../models/Restaurant";

type ContextProps = {
  children: React.ReactNode;
};

type RestaurantContextType = {
  restaurants: Restaurant[];
  deleteFav: (restaurantId: number) => void;
  addFav: (restaurantId: number) => void;
  Test:()=> void;
};

const RestaurantContext = createContext<RestaurantContextType>(
  {} as RestaurantContextType
);

export const useFavContext = () => useContext(RestaurantContext);

export const RestaurantContextV2Provider = ({ children }: ContextProps) => {
  const [favResto, setFavResto] = useState(restaurants);

  const Test = () => {
    console.log("test")
  }
  const addFav = (restaurantId: number) => {
    setFavResto(
      favResto.map((restaurant) => {
        if (restaurant.id === restaurantId) {
          return { ...restaurant, isFav: true };
        }
        return restaurant;
      })
    );
  };

  const deleteFav = (restaurantId: number) => {
    setFavResto(restaurants.filter((restau) => restau.id !== restaurantId));
  };

  return (
    <RestaurantContext.Provider value={{ restaurants, deleteFav, addFav,Test }}>
      {children}
    </RestaurantContext.Provider>
  );
};
