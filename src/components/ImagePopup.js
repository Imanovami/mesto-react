import React from "react";
import close from "../images/popup-close.svg";

function ImagePopup({card, onClose}) {

    return (
        <section className={`popup popup_type_photo ${card && 'popup_opened'}`}>
                <button className="popup__close" type="button" onClick={onClose}>
                    <img className="popup__close-icon"
                                                                    src={close}
                                                                    alt="кнопка закрытия окна"/></button>
                <img className="popup__image-big" src={card && card.link} alt={card && card.name}/>
                <h3 className="popup__description">{card && card.name}</h3>

        </section>
    );

}
export default ImagePopup;







