import { Restaurant } from "../models/Restaurant";
import "./card.css"
import "../pages/homepage.css"
import { useFavContext } from "../context/FavoritesContext";
import { Link } from "react-router-dom";

type CardProps = {
  restaurant: Restaurant;
};

export const Card = ({ restaurant }: CardProps) => {
  const {addFavorite,favRestoIds,setCurrentId, openModal} = useFavContext();
  const isFav = favRestoIds.includes(restaurant.id);
  return (
   <div className="card_wrapper">
    <Link to={`/restaurant/${restaurant.id}`} className="card_link">
    <img src={restaurant.img} className="card_img"></img>
    <h2 className="card_name">{restaurant.name}</h2>
    <h3 className="card_adress">{restaurant.address}</h3>
    </Link>
    <div className="cards_btn">
      {isFav ?
      <button className="card_btn" onClick={()=>{ setCurrentId(restaurant.id); openModal();}}>Remove from Favorites</button>
      :
      <button className="card_btn" onClick={()=>addFavorite(restaurant.id)}>Save as favorite</button>
      }
    </div>
   </div>
  );
};


