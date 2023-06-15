import "./modal.css";
import { useFavContext } from "../context/FavoritesContext";

export const Modal = ({ isOpen}: {isOpen: boolean}) => {

    const { closeModal, deleteFav } = useFavContext();
    if (!isOpen) {
        return null;
      }
  return (
    <div className="modal_wrapper">
      <div className="modal-content">
        <h3>Do you really wish to delete this favorite?</h3>
        <div className="modal_btns_area">
        <button className="close_modal" onClick={()=>closeModal()}>Cancel</button>
        <button className="confirm_modal" onClick={() => deleteFav()}>Confirm</button>
        </div>
        <i className="fa-regular fa-circle-xmark close_modal_cross fa-lg" onClick={()=>closeModal()}></i>
      </div>
    </div>
  );
};
