import React from 'react';
import './HeaderSlider.scss'
import {Link} from 'react-scroll'
import Button from "../UI/Button/Button";

const HeaderSlider = () => {
    return (
        <div className='HeaderSlider' id="headertop">
            <div className="HeaderSlider__wrapper container">

                    <h1 className="HeaderSlider__title">Быстрая доставка</h1>

                    <p className="HeaderSlider__text">бетона, щебня, песка и других нерудных материалов по Москве и Московской
                        области</p>

                    <div className="HeaderSlider__nav">

                        <Button orange={true}>Подробнее о доставке</Button>&nbsp;
                            или
                        <Link
                                to="headertop"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration= {500}>перейти в каталог
                        </Link>

                    </div>
                </div>

        </div>
    );
};

export default HeaderSlider;
