import { InfoWindow } from 'react-google-maps';
import Link from 'next/link';


class  LocationInfoWindow extends React.Component {

    toggle = () => {
    this.props.toggleOpen(this);
    }

    render() {

        const { name, address, slug } = this.props.data;

        return (
            <InfoWindow onCloseClick={this.toggle}>
                <Link
                    href={{
                        pathname: `/item/${slug}`,
                    }}> 
                    <a>
                        {name}<br></br>{address}
                    </a> 
                    </Link>
                        
            </InfoWindow>
     );
  }
}


export default LocationInfoWindow;