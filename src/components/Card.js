import React from "react";

function Card({card, onCardClick}) {

    return (
            <li className="element">
                <button className="element__photo" style={{ backgroundImage: `url(${card.link})`}}
                        onClick={() => {onCardClick(card)}}/>
                <h2 className="element__title">{card.name}</h2>
                <button className="element__like" />
                <div className="element__number">{(card.likes).length}</div>
                <button className="element__trash" />
            </li>

    )

}
export default Card

