import { Restaurant } from "../models/Restaurant";
import { Link } from "react-router-dom";

type CardProps = {
  restaurant: Restaurant;
};

export const Card = ({ restaurant }: CardProps) => {
  return (
    <Link to={`/restaurant/${restaurant.id}`}>
      <div className="card_wrapper">
        <img src={restaurant.img}></img>
        <h2 className="card_name">{restaurant.name}</h2>
        <h3 className="card_adress">{restaurant.address}</h3>
        <p className="card_description">{restaurant.description_short}</p>
      </div>
    </Link>
  );
};
