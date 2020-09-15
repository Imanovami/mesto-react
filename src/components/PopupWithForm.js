import React from "react";
import close from "../images/popup-close.svg";


function PopupWithForm({name, title, children, buttonTitle, isOpen, onClose}) {
    return (
        <section className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
            <div className="popup__container">
                <button className="popup__close" type="button" onClick={onClose}><img className="popup__close-icon"
                                                                    src={close}
                                                                    alt="кнопка закрытия окна"
                                                                    /></button>
                <form className={`popup__form popup__form_${name}`} noValidate>
                    <h3 className="popup__title">{title}</h3>
                    {children}
                    <button className="popup__button popup__save" type="submit">{buttonTitle}</button>
                </form>
            </div>
        </section>

    );

}
export default PopupWithForm;