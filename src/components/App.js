import React from 'react';
import Header from "./Header.js";
import Main from "./Main.js"
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import ApiR from "../utils/api.js";
import EditProfilePopup from "./EditProfilePopup"
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function App() {
    const [isEditProfileOpen, setIsEditProfileOpen] = React.useState(false);
    const [isAddCardOpen, setIsAddCardOpen] = React.useState(false);
    const [isAvatarOpen, setIsAvatarOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);
    /// Стейт с информацией по пользователю
    const [currentUser, setCurrentUser] = React.useState({});
    const [cards, setCards] = React.useState([]);

    React.useEffect(()=> {
      ApiR.getUserData().then (res => {
        setCurrentUser(res);
      })
          .catch((err) => console.log(err))
    }, []);

    React.useEffect(()=> {
      ApiR.getInitialCards().then (res => {
        setCards(res)
      })
          .catch((err) => console.log(err))
    },[]);

    function handleCardLike(card) {
      // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        isLiked ?
            ApiR.deleteLike(card._id).then((newCard) => {
            const newCards = cards.map((c) => c._id === card._id ? newCard : c);
            setCards(newCards);
             })
                .catch((err) => console.log(err))
        :
            ApiR.setLike(card._id).then((newCard) => {
            const newCards = cards.map((c) => c._id === card._id ? newCard : c);
            setCards(newCards);})
                .catch((err) => console.log(err))
    }

    function handleCardDelete(card) {
      ApiR.deleteCard(card._id).then(() => {
        const newCard = cards.filter(c => c._id !==card._id)
        setCards(newCard)
      })
          .catch((err) => console.log(err))
    }
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
    }

   function handleUpdateUser(onUpdateUser) {
      ApiR.changeProfile(onUpdateUser.name, onUpdateUser.about).then (res => {
          setCurrentUser(res);
          setIsEditProfileOpen(false)
    })
          .catch((err) => console.log(err))
  }

    function handleUpdateAvatar(onUpdateAvatar) {
        ApiR.renderAvatar(onUpdateAvatar.avatar).then(res => {
            setCurrentUser(res);
            setIsAvatarOpen(false)
      })
          .catch((err) => console.log(err))
    }

    function handleAddPlaceSubmit(onAddPlace){
        ApiR.postCard(onAddPlace.name, onAddPlace.link).then(res => {
            setCards([res, ...cards]);
            setIsAddCardOpen(false)
      })
          .catch((err) => console.log(err))
    }


    function closeAllPopups() {
      setIsEditProfileOpen(false);
      setIsAddCardOpen(false);
      setIsAvatarOpen(false);
      setSelectedCard(null)
    }

  return (
      <CurrentUserContext.Provider value={currentUser}>
        <div className="container">
        <div className="root">
          <Header />
          <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}/>
          <Footer />
          <ImagePopup
              card={selectedCard}
              onClose={closeAllPopups}/>
          <EditProfilePopup
              isOpen={isEditProfileOpen}
              onClose={closeAllPopups}
              onUpdateUser={handleUpdateUser}/>
          <AddPlacePopup
              isOpen={isAddCardOpen}
              onClose={closeAllPopups}
              onAddPlace={handleAddPlaceSubmit}
          />
          <EditAvatarPopup
              isOpen={isAvatarOpen}
              onClose={closeAllPopups}
              onUpdateAvatar={handleUpdateAvatar}
          />
          <PopupWithForm
              name="submit"
              title="Вы уверены?"
              buttonTitle="Да"
          >
            <label className="popup__field">
              <input className="popup__input popup__input_type_title" type="text" id="title-input" required
                     placeholder="Название" minLength="1" maxLength="30"/>
              <span id='title-input-error'/>
            </label>
            <label className="popup__field">
              <input className="popup__input popup__input_type_url" type="url" id="photo-input" required
                     placeholder="Ссылка на картинку"/>
              <span id='photo-input-error'/>
            </label>
          </PopupWithForm>
        </div>
        </div>
      </CurrentUserContext.Provider>
  );
}

export default App;
