import styled from 'styled-components';
import Link from 'next/link';
import axios from 'axios';

class StaticMap extends React.Component {

    state = {
        latLng: {}
    }

    componentDidMount() {
        this.getLatLng();
    }
 
    componentDidUpdate(prevProps, prevState){
        if(prevProps.city !== this.props.city) {
            this.getLatLng();
        }
    } 


    getLatLng = () => {
        const city = this.props.city;
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${process.env.MAP_KEY}`).then(res => {
            const { lat, lng } = res && res.data.results[0] ? res.data.results[0].geometry.location : '';
            const latLng = { lat, lng };
            this.setState({ latLng })
        });
    }


    render() {

        const { city, state } = this.props;
        if(!city) return null; 
        
        const { lat, lng } = this.state.latLng;
        
        return (
            <React.Fragment>
                <Link
                    prefetch
                    as={`/marijuana-dispensaries/${state}/${city}`}
                    href={ {pathname: '/city', query: {city: `${city}`, page: 0, state: `${state}` }} }> 
                    <a>
                        <MapImg src={`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=12&size=960x150&key=${process.env.MAP_KEY}&markers=${lat},${lng}&scale=2`} alt={`${city} strip clubs`}/>
                    </a> 
                    </Link>
            </React.Fragment>
        )
    }
}

const MapImg = styled.img`
    max-width: 100%;
`;

export default StaticMap;