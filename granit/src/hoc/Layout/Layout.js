import React, {Component} from 'react';
import Header from "../../components/Header/Header";
import HeaderSlider from "../../components/HeaderSlider/HeaderSlider";
import AlwaysInStock from "../../components/AlwaysInStock/AlwaysInStock";
import Advantages from "../../components/Advantages/Advantages";
import PopularGoods from "../../components/PopularGoods/PopularGoods";
import OurServices from "../../components/OurServices/OurServices";
import Contacts from "../../components/Contacts/Contacts";
import Footer from "../../components/Footer/Footer";

class Layout extends Component {
    render() {
        return (
            <div className='Layout'>
                <Header />
                <HeaderSlider />
                <main role='main'>
                    <AlwaysInStock/>
                    <Advantages />
                    <PopularGoods/>
                    <OurServices/>
                    <Contacts />
                    <Footer />
                </main>
            </div>
        );
    }
}

export default Layout;