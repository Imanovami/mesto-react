import PopupWithForm from "./PopupWithForm";
import React from "react";



function AddPlacePopup({isOpen, onClose, onAddPlace}) {
    const [name, setName] = React.useState('');
    const [link, setLink] = React.useState('');

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleLinkChange(e) {
        setLink(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        // Передаём значения управляемых компонентов во внешний обработчик
        onAddPlace({
            name: name,
            link: link
        });
    }


    return (
        <PopupWithForm
            name="add"
            title="Новое место"
            buttonTitle="Создать"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <label className="popup__field">
                <input className="popup__input popup__input_type_title" type="text" id="title-input" required
                       placeholder="Название" minLength="1" maxLength="30"
                       value={name}
                       onChange={handleNameChange}/>
                <span id='title-input-error' />
            </label>
            <label className="popup__field">
                <input className="popup__input popup__input_type_url" type="url" id="photo-input" required
                       placeholder="Ссылка на картинку"
                       value={link}
                       onChange={handleLinkChange}
                />
                <span id='photo-input-error' />
            </label>
        </PopupWithForm>
    )
}

export default AddPlacePopup