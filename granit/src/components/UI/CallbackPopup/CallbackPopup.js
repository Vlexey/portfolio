import React from 'react';
import Button from "../Button/Button";
import './CallbackPopup.scss'


const CallbackPopup = ({closePopup}) => {

    return (
        <div className='CallbackPopup'>
            <h3>Мы вам перезвоним</h3>
            <div>
                <label htmlFor="callbackPopup">Ваш телефон</label>
                <input type="tel" id='callbackPopup' required placeholder="+38-(___)-___ -__-__" />
            </div>
            <div>
                <label htmlFor="callbackPopup">Ваше имя</label>
                <input type="text" id='callbackPopup' required placeholder="Введите ваше имя" />
            </div>
            <Button callback onClick={closePopup}>Отправить заявку</Button>
        </div>
    );
};

export default CallbackPopup;
