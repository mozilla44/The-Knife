import { RestaurantsList } from "../components/RestaurantsList";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { restaurants } from "../data/data";

export const Test = () => {
  return (
    <RestaurantsContext.Provider value={{ restaurants: restaurants }}>
      <RestaurantsList />
    </RestaurantsContext.Provider>
  );
};
