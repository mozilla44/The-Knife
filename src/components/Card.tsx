import { Restaurant } from "../models/Restaurant";
import "./card.css"
import "../pages/homepage.css"
import { useFavContext } from "../context/FavoritesContext";

type CardProps = {
  restaurant: Restaurant;
};

export const Card = ({ restaurant }: CardProps) => {
  const {addFavorite} = useFavContext();
  return (
    <div>
    <div /* to={`/restaurant/${restaurant.id}`} */ className="card_link">
      <div className="card_wrapper">
        <img src={restaurant.img} className="card_img"></img>
        <h2 className="card_name">{restaurant.name}</h2>
        <h3 className="card_adress">{restaurant.address}</h3>
        <div className="cards_btn">
          <button onClick={()=>addFavorite(restaurant.id)}>Save as favorite</button>
        </div>
      </div>
    </div>
    </div>
  );
};
