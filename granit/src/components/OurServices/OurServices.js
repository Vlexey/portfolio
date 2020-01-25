import React from 'react';

import './OurServices.scss'
import service1 from './imgs/1image.png'
import service2 from './imgs/2image.png'
import service3 from './imgs/3image.png'
import Title from "../UI/Title/Title";

const OurServices = () => {
    return (
        <section className='OurServices' id='servises'>
            <Title>Наши Услуги</Title>
            <ul className="OurServices__wrapper container">

                <li className="OurServices__listItem">
                    <img src={`${service1}`} alt="service 1" />
                    <b>Аренда самосвала</b>
                </li>
                <li className="OurServices__listItem">
                    <img src={`${service2}`} alt="service 2" />
                    <b>Аренда спецтехники</b>
                </li>
                <li className="OurServices__listItem">
                    <img src={`${service3}`} alt="service 3" />
                    <b>Рытье траншеи</b>

                </li>
            </ul>
        </section>
    );
};

export default OurServices;
