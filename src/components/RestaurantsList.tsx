import React, { useContext } from "react";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { Card } from "./Card";
import "./RestaurantsLitst.css"

export const RestaurantsList = () => {
  const { restaurants } = useContext(RestaurantsContext);
  return (
    <>
    {restaurants.map((restaurant) => (
        <Card key={restaurant.id} restaurant={restaurant}  />
      ))}
    </>
  );
};