import { useParams } from "react-router";
import { Restaurant } from "../models/Restaurant";
import { useEffect, useState, useContext } from "react";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { NotFound } from "./NotFound";
import "./detailsPage.css";
import { useFavContext } from "../context/FavoritesContext";

export const DetailsPage = () => {
  const { id } = useParams();
  const { restaurants } = useContext(RestaurantsContext);
  const {favRestoIds, deleteFav, addFavorite} = useFavContext();
  const [resto, setResto] = useState<null | Restaurant>(null);


  useEffect(() => {
    if (id != null) {
      const result = restaurants.find((r) => r.id == +id);
      console.log(result);
      if (result != null) {
        setResto(result);
      }
    }
  }, [id, restaurants]);

  if (resto == null) return <NotFound />;

  const isFav = favRestoIds.includes(resto.id);

  return (
   <div className="details_page">
      <img src={resto.img} className="details_img"></img>
      <div className="details_wrapper">
        <section className="left_pannel">
        <div className="details_intro">
      <h1 className="details_name">{resto.name}</h1>
      { isFav ? 
      <button className="remove_me"  onClick={()=> deleteFav(resto.id)} >Remove from</button> 
      : 
      <button className="add_me" onClick={()=> addFavorite(resto.id)} >Save as favorite</button>
      }
      
      </div>
      <h2 className="details_adress" >{resto.address}</h2>
      <p className="details_description">{resto.description_long}</p>
        </section>
        <section className="right_pannel">
          <h2 className="details_menu">Menu:</h2>
          <div className="entrees"><h3 className="menu_cat_name">Entrees:</h3>{resto.menu.entrees.map(e => <p className="item">{e}</p>)}</div>
          <div className="dishes"><h3 className="menu_cat_name">Dishes:</h3>{resto.menu.dishes.map(e => <p className="item">{e}</p>)}</div>
          <div className="desert"><h3 className="menu_cat_name">Deserts:</h3>{resto.menu.deserts.map(e => <p className="item">{e}</p>)}</div>
        </section>
      </div>
    
   </div>
  );
};

  
