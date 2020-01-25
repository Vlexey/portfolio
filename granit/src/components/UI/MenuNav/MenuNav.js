import React from 'react';
import './MenuNav.scss';
import {Link} from 'react-scroll';


const MenuNav = () => {
    return (
        <nav className='MenuNav'>

            <Link
                activeClass="active"
                to="headertop"
                spy={true}
                smooth={true}
                offset={-120}
                duration= {500}>Главная
            </Link>

            <Link
                activeClass="active"
                to="alwaysstock"
                spy={true}
                smooth={true}
                offset={-120}
                duration= {500}>Каталог
            </Link>


            <Link
                activeClass="active"
                to="delivery"
                spy={true}
                smooth={true}
                offset={-120}
                duration= {500}>Доставка
            </Link>

            <Link
                activeClass="active"
                to="topgoods"
                spy={true}
                smooth={true}
                offset={-120}
                duration= {500}>Топ&nbsp;товары
            </Link>

            <Link
                activeClass="active"
                to="servises"
                spy={true}
                smooth={true}
                offset={-120}
                duration= {500}>Услуги
            </Link>

            <Link
                activeClass="active"
                to="contacts"
                spy={true}
                smooth={true}
                offset={-160}
                duration= {500}>Контакты
            </Link>

        </nav>
    );
};

export default MenuNav;
