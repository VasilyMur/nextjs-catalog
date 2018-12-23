import styled from 'styled-components';
import Link from 'next/link';

class StaticMap extends React.Component {
    render() {
        const { cityLatLng, city } = this.props;
        if(!cityLatLng || !city) return null;
        
        const { lat, lng } = cityLatLng;
        
        return (
            <React.Fragment>
                <Link
                    prefetch
                    as={`/city/${city}/map`}
                    href={{
                    pathname: '/map',
                    query: { city: `${city}` },
                    }}> 
                    <a>
                        <MapImg src={`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=12&size=800x150&key=${process.env.MAP_KEY}&markers=${lat},${lng}&scale=2`}/>
                    </a> 
                    </Link>
            </React.Fragment>
        )
    }
}

const MapImg = styled.img`
    max-width: 600px;
`;

export default StaticMap;