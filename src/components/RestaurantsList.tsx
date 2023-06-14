import React from "react";
import { Card } from "./Card";
import "./RestaurantsLitst.css"
import { Restaurant } from "../models/Restaurant";

export const RestaurantsList = ({restaurants}:{restaurants:Restaurant[]}) => {
  return (
    <div className="restaurantsList_wrapper">
    {restaurants.map((restaurant) => (
        <Card key={restaurant.id} restaurant={restaurant}  />
      ))}
    </div>
  );
};