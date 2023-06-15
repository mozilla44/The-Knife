import React, { createContext, useContext, useEffect, useState } from "react";
import { Modal } from "../components/Modal";

type FavContextProps = {
  children: React.ReactNode;
};

type FavContextType = {
  favRestoIds: number[];
  deleteFav: (restaurantId: number) => void;
  addFavorite: (restaurantId: number) => void;
  closeModal: () => void;
  openModal: () => void;
  isOpen: boolean;
};

const FavContext = createContext<FavContextType>({} as FavContextType);


export const useFavContext = () => useContext(FavContext);

export const FavContextProvider = ({ children }: FavContextProps) => {
  const [favRestoIds, setFavRestoId] = useState<number[]>([]);

  //state modale 
  const [isOpen, setIsOpen] = useState(true)
  

  useEffect(() => {
    const currFavIds = localStorage.getItem("favoritesIds");
    if (currFavIds) {
      setFavRestoId(JSON.parse(currFavIds));
    }
  }, []);

  const addFavorite = (restaurantId: number) => {
    if (!favRestoIds.includes(restaurantId)) {
      const clone = [...favRestoIds];
      clone.push(restaurantId);
      localStorage.setItem("favoritesIds", JSON.stringify(clone));
      setFavRestoId(clone);
    }
  };

  const deleteFav = (restaurantId: number) => {
    const filteredList = favRestoIds.filter((id) => id !== restaurantId) ;
    setFavRestoId(filteredList);
    localStorage.setItem("favoritesIds", JSON.stringify(filteredList));

  };

//methodes modale

const openModal = () => {
  setIsOpen(true);
};

const closeModal = () => {
  setIsOpen(false);
};

  return (
    <FavContext.Provider value={{ addFavorite, deleteFav, favRestoIds,isOpen,closeModal,openModal,Modal }}>
      {children}
      {Modal}
    </FavContext.Provider>
  );
};
