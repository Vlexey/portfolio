import React from 'react';
import './Advantages.scss'
import discount from './imgs/cool_price.png'
import delivery from './imgs/delivery.png'
import individual from  './imgs/individual.png'
import Title from "../UI/Title/Title";

const Advantages = () => {
    return (
        <section className='Advantages' id='delivery'>
            <Title>Наши преимущества</Title>
            <ul className="Advantages__wrapper container">

                <li className="Advantages__listItem">
                    <img src={`${discount}`} alt="Cool Price" />
                    <b>Низкая цена</b>
                    <p>Мы сотрудничаем напрямую
                        с производителем, поэтому можем гарантировать самую низкую цену.
                    </p>
                </li>
                <li className="Advantages__listItem">
                    <img src={`${delivery}`} alt="Cool Price" />
                    <b>Быстрая доставка</b>
                    <p>Весь товар уже находится на нашем складе.
                        Нам остается только погрузить его и в путь!
                    </p>
                </li>
                <li className="Advantages__listItem">
                    <img src={`${individual}`} alt="Cool Price" />
                    <b>Индивидуальный подход</b>
                    <p>Вам нужны бесперебойные поставки
                        или большая партия товара со скидкой?
                        Мы найдем решение!
                    </p>
                </li>
            </ul>
        </section>
    );
};

export default Advantages;
