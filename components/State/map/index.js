import styled from 'styled-components';
import Link from 'next/link';

class Map extends React.Component {
    render() {
        const { latLng, state } = this.props;
        if(!latLng || !state) return null;
        
        const { lat, lng } = latLng;
        
        return (
            <React.Fragment>
                <Link
                    prefetch
                    as={`/state/${state}/map`}
                    href={{
                    pathname: '/mapState',
                    query: { state: `${state}` },
                    }}> 
                    <a>
                        <MapImg src={`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=11&size=960x150&key=${process.env.MAP_KEY}&markers=${lat},${lng}&scale=2`} alt={`${state} dispensaries`}/>
                    </a> 
                    </Link>
            </React.Fragment>
        )
    }
}

const MapImg = styled.img`
    max-width: 100%;
`;

export default Map;