import { useParams } from "react-router";
import { Restaurant } from "../models/Restaurant";
import { useEffect, useState, useContext } from "react";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { NotFound } from "./NotFound";

export const DetailsPage = () => {
  const { id } = useParams();
  const { restaurants } = useContext(RestaurantsContext);
  const [resto, setResto] = useState<null | Restaurant>(null);

  useEffect(() => {
    if (id != null) {
      const result = restaurants.find((r) => r.id == +id);
      console.log(result);
      if (result!= null) {
      setResto(result);
    }}
   
  }, [id, restaurants]);

  if (resto == null) return (<NotFound/>)


  return (
    <div>
      <h1>{resto.name}</h1>
      <h1>{resto.address}</h1>
      <h1>{resto.description_long}</h1>
      <img src={resto.img}></img>
    </div>
  );
};
