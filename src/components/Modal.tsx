import "./modal.css";
import { useFavContext } from "../context/FavoritesContext";

//recuperer valeur isopen depuis contexte ?

export const Modal = () => {

    const { isOpen, closeModal } = useFavContext();
    if (!isOpen) {
        return null;
      }
  return (
    <div className="modal_wrapper">
      <div className="modal-content">
        <i className="fa-regular fa-circle-xmark"></i>
        <button className="close_modal">Cancel</button>
        <button className="confirm_modal">Confirm</button>
      </div>
    </div>
  );
};
