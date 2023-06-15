import React, { createContext, useContext, useState } from "react";
import { restaurants } from "../data/data";
import { Restaurant } from "../models/Restaurant";

type FavContextProps = {
  children: React.ReactNode;
};

type FavContextType = {
  restaurants: Restaurant[];
  deleteFav: (restaurantId: number) => void;
  addFav: (restaurantId: number) => void;
  Test: ()=> void;
};

const FavContext = createContext<FavContextType>(
  {} as FavContextType
);

export const useFavContext = () => useContext(FavContext);

export const FavContextProvider = ({ children }: FavContextProps) => {
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
    <FavContext.Provider value={{ restaurants, deleteFav, addFav,Test }}>
      {children}
    </FavContext.Provider>
  );
};
