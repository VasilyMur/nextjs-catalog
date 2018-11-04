import Map from './Map';


class MapContainer extends React.Component { 
    render() {

		return (
			<Map
        marker={this.props.marker}
        club={this.props.club}
        containerElement={ <div style={{ height: `400px`, width: '100%' }} /> }
        mapElement={ <div style={{ height: `100%` }} /> }
			/>
		);
    }
}


export default MapContainer;



