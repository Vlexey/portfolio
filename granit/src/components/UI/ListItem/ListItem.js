import React from 'react';
import Button from "../Button/Button";
import './ListItem.scss'

const ListItem = ( {small,large, img, label, text, price, salePrice, btnText} ) => {

    let widthImg = '';
    let cls = ['ListItem'];

    if (small) {
        widthImg = '180'
        cls.push('ListItem__small')
    }

    if (large) {
        widthImg = "240"
        cls.push('ListItem__large')
    }
    if (salePrice) {
        cls.push('sale')
    }




    return (
        <li className={cls.join(' ')}>
            <img src={`${img}`} alt={label} width={widthImg} />
            <b> {label} </b>
            {text && <p>{text}</p>}

            {salePrice && <span className="saleLabel">Акция</span>}

            {
                salePrice ?
                    <div className="sale__wrapper">
                        <span className="salePrice">от {salePrice} р./т</span>
                        <h3 className="saleFirstPrice">от {price} р./т</h3>
                    </div>
                    :
                    <h3>от {price} р./т</h3>
            }

            <Button orange={!salePrice} sale={salePrice}

            >{btnText}</Button>
        </li>
    );
};

export default ListItem;
