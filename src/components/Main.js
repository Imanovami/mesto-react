import React from "react";
import edit from "../images/profile-Edit-Button.svg";
import add from "../images/profile-Add-Button.svg";
import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick, cards, onCardLike, onCardDelete }) {
    const currentUser = React.useContext(CurrentUserContext)

    return (
        <main className="content">
            <section className="profile">
                <button className="profile__avatar" alt="аватар." type="button"
                        onClick={onEditAvatar}
                        style={{ backgroundImage: `url(${currentUser.avatar})` }}/>
                <button className="profile__editAvatar" alt="редактирование аватара"/>
                <div className="profile__info">
                    <h1 className="profile__title">{currentUser.name}</h1>
                    <p className="profile__text">{currentUser.about}</p>
                    <button className="profile__editbutton profile__open" type="button"
                            onClick={onEditProfile}>
                        <img className="profile__editbutton-img" src={edit}
                             alt="кнопка редактирования профиля."/></button>
                </div>
                    <button className="profile__addbutton profile__open_add" type="button"
                            onClick={onAddPlace}>
                        <img className="profile__addbutton-img" src={add}
                             alt="кнопка добавления профиля."/></button>
                </section>

                <section className="elements">
                    <ul className="elements__container">
                    </ul>
                </section>

                <section className="elements">
                    <ul className = "elements__container">
                    {cards.map(card=> <Card
                        key={card._id}
                        card={card}
                        onCardClick={onCardClick}
                        onCardLike={onCardLike}
                        onCardDelete={onCardDelete}/>)}

                    </ul>
                </section>
            </main>
        );
    }

export default Main;
