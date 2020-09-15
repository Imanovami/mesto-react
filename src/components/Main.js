import React from "react";
import edit from "../images/profile-Edit-Button.svg";
import add from "../images/profile-Add-Button.svg";
import ApiR from "../utils/Api.js";
import Card from "./Card.js";

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
const [userName, setUserName] = React.useState('');
const [userDescription, setUserDescription] = React.useState('');
const [userAvatar, setUserAvatar] = React.useState('');
const [cards, setCards] = React.useState([])


    React.useEffect(() => {
        ApiR.getAllData()
            .then(([user, items]) => {
                setUserName(user.name);
                setUserDescription(user.about);
                setUserAvatar(user.avatar);
                setCards(items)
            })
    }, []);
        return (
            <main className="content">
                <section className="profile">
                    <button className="profile__avatar" alt="аватар." type="button" onClick={onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }}/>
                    <button className="profile__editAvatar" alt="редактирование аватара"/>
                    <div className="profile__info">
                        <h1 className="profile__title">{`${userName}`}</h1>
                        <p className="profile__text">{`${userDescription}`}</p>
                        <button className="profile__editbutton profile__open" type="button" onClick={onEditProfile}>
                            <img
                            className="profile__editbutton-img" src={edit}
                            alt="кнопка редактирования профиля."/></button>
                    </div>
                    <button className="profile__addbutton profile__open_add" type="button" onClick={onAddPlace}>
                        <img
                        className="profile__addbutton-img" src={add}
                        alt="кнопка добавления профиля."/></button>
                </section>

                <section className="elements">
                    <ul className="elements__container">
                    </ul>
                </section>
                <section className="elements">
                    <ul className = "elements__container">
                    {cards.map(card=> <Card key={card._id} card={card} onCardClick={onCardClick}/>)}
                    console.log(card)
                    </ul>
                </section>
            </main>

        );
    }

export default Main;
