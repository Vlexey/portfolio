import React from 'react';
import './PopularGoods.scss'

import sheb1 from './imgs/shebin_1.jpg'
import sheb2 from './imgs/shebin_2.jpg'
import sheb3 from './imgs/shebin_3.jpg'
import sheb4 from './imgs/shebin_4.jpg'
import ListItem from "../UI/ListItem/ListItem";
import Title from "../UI/Title/Title";

const goodList = [
    {
        id: 6,
        img: sheb1,
        label: 'Песок речной',
        price: 330,
        small: true
    },
    {
        id: 7,
        img: sheb2,
        label: 'Песок речной',
        price: 260,
        salePrice: 134,
        small: true
    },
    {
    id: 8,
    img: sheb3,
    label: 'Песок речной',
    price: 430,
    small: true
    } ,
    {
        id: 9,
        img: sheb4,
        label: 'Песок речной',
        price: 430,
        salePrice: 359,
        small: true
    }
];


const PopularGoods = () => {
    return (
        <section className='PopularGoods' id='topgoods'>
            <Title>Популярные товары</Title>
            <ul className='PopularGoods__wrapper container'>
                {
                    goodList.map((good) => {
                        return (
                            <ListItem
                                key={good.id}
                                large={good.large}
                                small={good.small}
                                img={good.img}
                                label={good.label}
                                price={good.price}
                                salePrice={good.salePrice}
                                btnText="Купить"
                            />
                        )
                    })
                }
            </ul>
        </section>
    );
};

export default PopularGoods;
