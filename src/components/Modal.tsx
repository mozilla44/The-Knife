import "./modal.css";
import { useFavContext } from "../context/FavoritesContext";

//recuperer valeur isopen depuis contexte ?

export const Modal = ({ isOpen}: {isOpen: boolean}) => {

    const { closeModal, deleteFav } = useFavContext();
    if (!isOpen) {
        return null;
      }
  return (
    <div className="modal_wrapper">
      <div className="modal-content" onClick={()=>closeModal()} >
        <i className="fa-regular fa-circle-xmark"></i>
        <button className="close_modal" onClick={()=>closeModal()}>Cancel</button>
        <button className="confirm_modal" onClick={() => deleteFav()}>Confirm</button>
      </div>
    </div>
  );
};
