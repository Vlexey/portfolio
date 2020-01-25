import React, {Component} from 'react';
import Button from "../Button/Button";
import './Callback.scss'
import CallbackPopup from "../CallbackPopup/CallbackPopup";

//foot: boolean


class Callback extends Component {

    state = {
        showPopup: false
    };

    togglePopup = () => this.setState({
            showPopup: !this.state.showPopup
        });


    render() {
        const cls = ['Callback'];

        if(this.props.foot) {
            cls.push('Callback__footer')
        }

        return (
            <div className={cls.join(' ')}>
                <div className="Callback__container">
                    <a className="Callback__tel" href="tel:+88003421333">8 800 342-13-33</a>
                    <div className="Callback__text">Бесплатный звонок по России</div>
                </div>
                <Button callback
                        onClick={this.togglePopup}
                >Обратный звонок</Button>
                {                    this.state.showPopup ?

                        <CallbackPopup
                            closePopup={this.togglePopup}

                        />
                        : null
                }

            </div>
        );
    }
}

export default Callback;