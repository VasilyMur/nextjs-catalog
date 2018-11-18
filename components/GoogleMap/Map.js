import React from 'react';
import { withGoogleMap, GoogleMap } from "react-google-maps";
import LocationMarker from './LocationMarker'; 


const Map = withGoogleMap((props) => {

const markers = props.markers && props.markers.map((res, i) => {
  return <LocationMarker key={i} markerData={res}/>
}) 
 
    return (
        <GoogleMap
          defaultZoom={props.single ? 15 : 12}
          defaultOptions={{ zoomControlOptions: { position: google.maps.ControlPosition.TOP_RIGHT } }}
          center={props.mapCenter}
          >
          {markers}
        </GoogleMap>
  );
})

export default Map;

