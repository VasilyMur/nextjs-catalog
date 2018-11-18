import Map from './Map';


class MapContainer extends React.Component { 
    render() {
      const { mapCenter, markers, single } = this.props;
      const containerStyle = single ? { height: `400px`, width: '100%' } : { height: `600px`, width: '100%' };
 
      return (
        <Map
          mapCenter={mapCenter}
          markers={markers}
          single={single}
          containerElement={ <div style={containerStyle} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      );
    }
}


export default MapContainer;



