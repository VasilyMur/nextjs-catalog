import React from 'react';
import { Marker } from 'react-google-maps';
import LocationInfoWindow from './LocationInfoWindow'; 
//import Pin from '../../static/pin.png';

class LocationMarker extends React.Component {
  
  state = {
    isOpen: false,
}

toggleOpen = () => {
  const isOpen = this.state.isOpen;
  this.setState({isOpen: !isOpen }); 
}

render() {
    const { markerData } = this.props;
    const { position, ...itemData } = markerData;

	return (
      <Marker       
        onClick={this.toggleOpen}    
        position={position}      
       //icon={Pin}
      >

        { this.state.isOpen ? 
          <LocationInfoWindow maxWidth={300} toggleOpen={this.toggleOpen} data={itemData}>
          </LocationInfoWindow> : null }

      </Marker>
	);
  }
}


export default LocationMarker;