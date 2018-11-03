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
    
	return (
      <Marker       
        onClick={this.toggleOpen}
        position={this.props.marker}      
       //icon={Pin}
      >

        { this.state.isOpen ? 
          <LocationInfoWindow maxWidth={300} toggleOpen={this.toggleOpen} club={this.props.club}>
          </LocationInfoWindow> : null }

      </Marker>
	);
  }
}


export default LocationMarker;