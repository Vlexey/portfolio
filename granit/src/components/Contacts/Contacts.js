import React from 'react';
import {GoogleMap, withGoogleMap, withScriptjs} from 'react-google-maps'
import './Contacts.scss'


const Map = () => {
    return (
        <GoogleMap defaultZoom={10}
                   defaultCenter={{lat: 50.447731,lng: 30.542721}}
        />
    );
};

const WrappedMap = withScriptjs(withGoogleMap(Map))

const Contacts = () => {
    return (
        <div className='Contacts' id='contacts' style={{widh: '100vw'}}>
            <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%`}} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    );
};

export default Contacts;
