import Map from './Map';


class MapContainer extends React.Component { 
    render() {
      const { mapCenter, markers, zoom, statePage } = this.props;
      if (!markers) return null; 
       
      const containerStyle = { height: `400px`, width: '100%' };
 
      return (
        <Map
          mapCenter={mapCenter}
          markers={markers}
          zoom={zoom}
          statePage={statePage}
          containerElement={ <div style={containerStyle} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      );
    } 
}


export default MapContainer;



