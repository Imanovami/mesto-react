import PopupWithForm from "./PopupWithForm";
import React from "react";

function EditAvatarPopup ({isOpen, onClose, onUpdateAvatar}) {
    const avatarRef = React.useRef(''); // записываем объект, возвращаемый хуком, в переменную

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
            avatar: avatarRef.current.value,
        });
    }

    return (
        <PopupWithForm
            name="avatar"
            title="Обновить аватар"
            buttonTitle="Сохранить"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <label className="popup__field">
                <input className="popup__input popup__input_type_name" type="url" id="avatar-input" name="avatar-input"
                       required placeholder="Ссылка на картинку" ref={avatarRef}/>
                <span id='avatar-input-error' />
            </label>
        </PopupWithForm>
    )
}

export default EditAvatarPopup