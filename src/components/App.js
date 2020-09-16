import React from 'react';
import Header from "./Header.js";
import Main from "./Main.js"
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";



function App() {

  const [isEditProfileOpen, setIsEditProfileOpen] = React.useState(false);
  const [isAddCardOpen, setIsAddCardOpen] = React.useState(false);
  const [isAvatarOpen, setIsAvatarOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState(null)
  function handleEditProfileClick(){
    setIsEditProfileOpen(true);
  }

  function handleAddPlaceClick(){
    setIsAddCardOpen(true);
  }
  function handleEditAvatarClick() {
    setIsAvatarOpen(true);
  }

 function handleCardClick(card) {
    setSelectedCard(card);
  };

  function closeAllPopups() {
    setIsEditProfileOpen(false);
    setIsAddCardOpen(false);
    setIsAvatarOpen(false);
    setSelectedCard(null)
  }

  return (
      <div className="container">
      <div className="root">
        <Header />
        <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}/>
        <Footer />
        <ImagePopup
            card={selectedCard}
            onClose={closeAllPopups}/>
        <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        buttonTitle="Сохранить"
        isOpen={isEditProfileOpen}
        onClose={closeAllPopups}
        >
          <label className="popup__field">
            <input className="popup__input popup__input_type_name" type="text" id="name-input"
                   name="name-input"
                   required minLength="2" maxLength="40" placeholder="Имя профиля"/>
            <span id='name-input-error' />
          </label>
          <label className="popup__field">
            <input className="popup__input popup__input_type_job" type="text" id="job-input"
                   name="job-input" required
                   minLength="2" maxLength="200" placeholder="Описание профиля"/>
            <span id='job-input-error' />
          </label>
        </PopupWithForm>

        <PopupWithForm
            name="add"
            title="Новое место"
            buttonTitle="Создать"
            isOpen={isAddCardOpen}
            onClose={closeAllPopups}
        >
          <label className="popup__field">
            <input className="popup__input popup__input_type_title" type="text" id="title-input" required
                   placeholder="Название" minLength="1" maxLength="30"/>
            <span id='title-input-error' />
          </label>
          <label className="popup__field">
            <input className="popup__input popup__input_type_url" type="url" id="photo-input" required
                   placeholder="Ссылка на картинку"/>
            <span id='photo-input-error' />
          </label>
        </PopupWithForm>

        <PopupWithForm
            name="avatar"
            title="Обновить аватар"
            buttonTitle="Сохранить"
            isOpen={isAvatarOpen}
            onClose={closeAllPopups}
        >
          <label className="popup__field">
            <input className="popup__input popup__input_type_name" type="url" id="avatar-input" name="avatar-input"
                   required placeholder="Ссылка на картинку"/>
              <span id='avatar-input-error' />
          </label>
        </PopupWithForm>

        <PopupWithForm
            name="submit"
            title="Вы уверены?"
            buttonTitle="Да"
        >
          <label className="popup__field">
            <input className="popup__input popup__input_type_title" type="text" id="title-input" required
                   placeholder="Название" minLength="1" maxLength="30"/>
            <span id='title-input-error'></span>
          </label>
          <label className="popup__field">
            <input className="popup__input popup__input_type_url" type="url" id="photo-input" required
                   placeholder="Ссылка на картинку"/>
            <span id='photo-input-error'></span>
          </label>
        </PopupWithForm>
      </div>
      </div>
  );
}

export default App;
