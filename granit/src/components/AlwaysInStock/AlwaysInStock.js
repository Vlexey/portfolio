import React from 'react';
import Title from "../UI/Title/Title";
import shebin from './imgs/sheben.jpg'
import pesok from  './imgs/pesok.jpg'
import grunt from  './imgs/grunt.jpg'
import ListItem from "../UI/ListItem/ListItem";

import './AlwaysInStock.scss'

const goodList = [ {
        id: 1,
        img: pesok,
        label: 'Песок речной',
        text: 'Мелкий речной песок повышает прочность, долговечность и морозоустойчивость растворов, в состав которых он входит. ',
        price: '330',
        large: true,
        salePrice: 279,
        small: false
    },    {
        id: 2,
        img: shebin,
        label: 'Песок речной',
        text: 'Мелкий речной песок повышает прочность, долговечность и морозоустойчивость растворов, в состав которых он входит. ',
        price: '260',
        large: true,
        small: false
    },    {
        id: 3,
        img: grunt,
        label: 'Песок речной',
        text: 'Мелкий речной песок повышает прочность, долговечность и морозоустойчивость растворов, в состав которых он входит. ',
        price: '430',
        large: true,
        small: false
    } ];

const AlwaysInStock = () => {
    return (
        <section className='AlwaysInStock' id='alwaysstock'>
            <Title>Всегда в наличии</Title>
            <ul className="AlwaysInStock__wrapper container">

                    {
                        goodList.map((good) => {
                            return (
                               <ListItem
                                   key={good.id}
                                   large={good.large}
                                   img={good.img}
                                   label={good.label}
                                   text={good.text}
                                   price={good.price}
                                   salePrice={good.salePrice}
                                   btnText={`Подробнее`}
                               />
                            )
                        })
                    }

            </ul>

        </section>
    );
};
export default AlwaysInStock;

