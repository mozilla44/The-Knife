import React, { createContext, useContext, useEffect, useState } from "react";
import { Modal } from "../components/Modal";

type FavContextProps = {
  children: React.ReactNode;
};

type FavContextType = {
  favRestoIds: number[];
  deleteFav: () => void;
  addFavorite: (restaurantId: number) => void;
  closeModal: () => void;
  openModal: () => void;
  setCurrentId: (id: number) => void;
};

const FavContext = createContext<FavContextType>({} as FavContextType);


export const useFavContext = () => useContext(FavContext);

export const FavContextProvider = ({ children }: FavContextProps) => {
  const [favRestoIds, setFavRestoId] = useState<number[]>([]);
  const [currentId, setCurrentId] = useState<number>();

  const [isOpen, setIsOpen] = useState(false);
  

  useEffect(() => {
    const currFavIds = localStorage.getItem("favoritesIds");
    if (currFavIds != null) {
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

  const deleteFav = () => {
    const filteredList = favRestoIds.filter((id) => id !== currentId) ;
    setFavRestoId(filteredList);
    localStorage.setItem("favoritesIds", JSON.stringify(filteredList));
    setIsOpen(false)
  };


const openModal = () => {
  setIsOpen(true);
};

const closeModal = () => {
  setIsOpen(false);
};

  return (
    <FavContext.Provider value={{ addFavorite, deleteFav, favRestoIds,closeModal,openModal,setCurrentId }}>
      {children}
      <Modal isOpen={isOpen}/>
    </FavContext.Provider>
  );
};
