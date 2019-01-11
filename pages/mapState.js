import axios from 'axios';
import styled from 'styled-components';
import MapContainer from '../components/GoogleMap/MapContainer.js';

const Map = (props) => {
        return (
            <InnerMap>
                <MapContainer mapCenter={props.mapCenter} markers={props.items && props.items.map(res=> {
                    return {
                        position: {lat: res.location.coordinates[1], lng: res.location.coordinates[0]},
                        name: res.name,
                        address: res.location.address,
                        city: res.city,
                        slug: res.slug
                    }
                })} />
            </InnerMap>
        )
}


Map.getInitialProps = async function(context) {
    try {
        // CHANGE!!!!! to REAL PATH!! WHY RELATIVE нельзя???
        const { state } = context.query;
        const res = await axios.get(`http://localhost:3000/api/items/allstate/${state}`);
        const stateCoordinates = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${state}&key=${process.env.MAP_KEY}`);
        const { lat, lng } = stateCoordinates.data.results[0].geometry.location;

        return {
           items: res.data.items,
           count: res.data.count,
           mapCenter: { lat, lng }
        }  
    } catch(err) {
        console.log(err)
    }
} 

const InnerMap = styled.div`
max-width: ${props => props.theme.maxWidth};
margin: 0 auto;
padding: ${props => props.theme.innerPadding};
`;

export default Map;