import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import React from "react";


function EditProfilePopup ({isOpen, onClose,onUpdateUser}) {
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    const currentUser = React.useContext(CurrentUserContext)

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        // Передаём значения управляемых компонентов во внешний обработчик
        onUpdateUser({
            name,
            about: description,
        });
    }

    React.useEffect(() => {
        setName(currentUser.name || '');
        setDescription(currentUser.about || '');
    }, [currentUser]);

    return (
        <PopupWithForm
            name="edit"
            title="Редактировать профиль"
            buttonTitle="Сохранить"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <label className="popup__field">
                <input className="popup__input popup__input_type_name" type="text" id="name-input"
                       name="name-input"
                       required minLength="2" maxLength="40" placeholder="Имя профиля"
                       value={name}
                       onChange={handleNameChange}
                />
                <span id='name-input-error' />
            </label>
            <label className="popup__field">
                <input className="popup__input popup__input_type_job" type="text" id="job-input"
                       name="job-input" required
                       minLength="2" maxLength="200" placeholder="Описание профиля"
                       value={description}
                       onChange={handleDescriptionChange}
                />
                <span id='job-input-error' />
            </label>
        </PopupWithForm>
    )
}
export default EditProfilePopup
