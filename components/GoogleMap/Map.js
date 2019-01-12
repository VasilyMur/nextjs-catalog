import React from 'react';
import { withGoogleMap, GoogleMap } from "react-google-maps";
import LocationMarker from './LocationMarker'; 


const Map = withGoogleMap((props) => {

  const bounds = new window.google.maps.LatLngBounds();
  props.markers.map(res => {
    const { lat, lng } = res.position;
    const latLng = new window.google.maps.LatLng(lat, lng);
    bounds.extend(latLng);
  });


const markers = props.markers && props.markers.map((res, i) => {
  return <LocationMarker statePage={props.statePage} key={i} markerData={res}/>
}) 
 
    return (
        <GoogleMap
          ref={map => map && map.fitBounds(bounds)}
          defaultZoom={props.zoom}
          defaultOptions={{ zoomControlOptions: { position: google.maps.ControlPosition.TOP_RIGHT } }}
          defaultCenter={props.mapCenter}
          >
          {markers}
        </GoogleMap> 
  );
})

export default Map;

