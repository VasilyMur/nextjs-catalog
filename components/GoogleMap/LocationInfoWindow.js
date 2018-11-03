import { InfoWindow } from 'react-google-maps';


class  LocationInfoWindow extends React.Component {

    toggle = () => {
    this.props.toggleOpen(this);
    }

    render() {

        const { name, address } = this.props.club;

        return (
            <InfoWindow onCloseClick={this.toggle}>
                <p>{name}<br></br>{address}</p>
            </InfoWindow>
     );
  }
}


export default LocationInfoWindow;