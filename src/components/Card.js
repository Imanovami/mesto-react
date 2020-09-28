import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({card, onCardClick, onCardLike, onCardDelete}) {
    const currentUser = React.useContext(CurrentUserContext)
    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwn = card.owner._id === currentUser._id;


// Создаём переменную, которую после зададим в `className` для кнопки удаления
    const cardDeleteButtonClassName = (
        `element__trash ${isOwn ? 'element__trash_visible' : 'element__trash_hidden'}`
    );

    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = card.likes.some(i => i._id === currentUser._id);

// Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = ` ${isLiked ? 'element__like element__like_active' : 'element__like'}`;



    return (
            <li className="element">
                <button className="element__photo" style={{ backgroundImage: `url(${card.link})`}}
                        onClick={() => {onCardClick(card)}}/>
                <h2 className="element__title">{card.name}</h2>
                <button className={cardLikeButtonClassName} onClick={() => {onCardLike(card)}} />
                <div className="element__number">{card.likes.length}</div>
                <button className={cardDeleteButtonClassName} onClick={() =>onCardDelete(card)}/>
            </li>

    )

}
export default Card

