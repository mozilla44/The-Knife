import { Restaurant } from "../models/Restaurant";
import { Link } from "react-router-dom";
import "./card.css"
import "../pages/homepage.css"

type CardProps = {
  restaurant: Restaurant;
};

export const Card = ({ restaurant }: CardProps) => {
  return (
    <Link to={`/restaurant/${restaurant.id}`} className="card_link">
      <div className="card_wrapper">
        <img src={restaurant.img} className="card_img"></img>
        <h2 className="card_name">{restaurant.name}</h2>
        <h3 className="card_adress">{restaurant.address}</h3>
      </div>
    </Link>
  );
};
