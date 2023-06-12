import { useParams } from "react-router";
import { Restaurant } from "../models/Restaurant";
import { useEffect, useState, useContext } from "react";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { NotFound } from "./NotFound";
import "./detailsPage.css"

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
    <div className="details_wrapper">
      <img src={resto.img} className="details_img"></img>
      <div className="details_intro">
      <h1 className="details_name">{resto.name}</h1>
      <button className="add_me" onClick={()=>{console.log("coucou")}}>Save as favorite</button>
      </div>
      {/* <h1 className="details_name">{resto.name}<button>Save as favorite</button></h1> */}
      <h2 className="details_adress" >{resto.address}</h2>
      <p className="details_description">{resto.description_long}</p>
      
    </div>
  );
};
