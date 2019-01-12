import { InfoWindow } from 'react-google-maps';
import Link from 'next/link';


class  LocationInfoWindow extends React.Component {

    toggle = () => {
    this.props.toggleOpen(this);
    }

    render() {

        const { name, address, state, city, slug, count } = this.props.data;
        const { statePage } = this.props;

        return (
            <InfoWindow onCloseClick={this.toggle}>
            { statePage ? 

                <Link
                href={{
                    pathname: `/marijuana-dispensaries/${state}/${city}`,
                }}> 
                <a>
                <strong>{name}</strong><br></br>{address}
                Number of Dispensaries: {count}
                </a> 
                </Link> :

                <Link
                href={{
                    pathname: `/marijuana-dispensaries/${state}/${city}/${slug}`,
                }}> 
                <a>
                <strong>{name}</strong><br></br>{address}
                </a> 
                </Link> }
                   
            </InfoWindow>
     );
  }
}


export default LocationInfoWindow;