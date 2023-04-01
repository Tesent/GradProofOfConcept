import React, { PureComponent, useState } from "react";
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import './MapFinland.css';

const BasicMap = () => {
    const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 });
    const ZOOM_LEVEL = 9;
};

class MapFinland extends PureComponent {
     render(){
        return(
            <MapContainer center={[62.2333,25.7333]} zoom={13} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[62.2333,25.7333]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
            
        );
    };
}

export default MapFinland;