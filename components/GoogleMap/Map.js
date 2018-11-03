import React from 'react';
import { withGoogleMap, GoogleMap } from "react-google-maps";
import LocationMarker from './LocationMarker'; 


const Map = withGoogleMap((props) => {
const { lat, lng } = props.marker;

    return (
        <GoogleMap
          defaultZoom={15}
          center={ { lat, lng } }
          >
        <LocationMarker marker={props.marker} club={props.club}/>
        </GoogleMap>
  );
})

export default Map;
