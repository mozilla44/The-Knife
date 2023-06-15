import { RestaurantsList } from "../components/RestaurantsList";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { restaurants } from "../data/data";
import { useContext } from "react";

export const Homepage = () => {
  const {restaurants} = useContext(RestaurantsContext);
  return (
      <RestaurantsList restaurants={restaurants} />
  );
};
