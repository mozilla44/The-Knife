import { RestaurantsList } from "../components/RestaurantsList";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useContext, useEffect, useState } from "react";
import { useFavContext } from "../context/FavoritesContext";
import { Restaurant } from "../models/Restaurant";

export const FavoritesPage = () => {
const {favRestoIds} = useFavContext();
const {restaurants} = useContext(RestaurantsContext);
const [favRestaurants, setFavRestaurants] = useState<Restaurant[]>([]);

useEffect(() => {
  setFavRestaurants(restaurants.filter((restaurant) => favRestoIds.includes(restaurant.id)));
}, [favRestoIds,restaurants])

  return (
    <>
       <RestaurantsList restaurants={favRestaurants} />
    </>
  );
}; 