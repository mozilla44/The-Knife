import { useParams } from "react-router";
import { Restaurant } from "../models/Restaurant";
import { useEffect, useState, useContext ,} from "react";
import { RestaurantsContext } from "../context/RestaurantsContext";


export const DetailsPage = () => {
  const { id } = useParams();
  const { restaurants } = useContext(RestaurantsContext);
  const [resto, setResto] = useState<null | Restaurant>(null);
  /* console.log(restaurants);
  console.log(id); */

  useEffect(() => {
    const stringToNumber = Number(id)
    console.log(stringToNumber);
    console.log(typeof(stringToNumber));
    if(id  != null){
    const result = restaurants.find((r) => r.id == +id);
    console.log("resussit");

    if (result) {
      setResto(result);
      console.log(result);
    }
    
else{
    console.log("fail")
}
    
  }}, []);

  return <div>Test</div>;
};
