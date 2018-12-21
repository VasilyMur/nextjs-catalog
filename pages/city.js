import axios from 'axios';
import AllItemsCity from '../components/AllItemsCity';
import styled from 'styled-components';

const City = (props) => {
        return (
            <Inner>
                <AllItemsCity {...props}/>
            </Inner>
        ) 
}
 
 

City.getInitialProps = async function(context) {
    try {
        // CHANGE!!!!! to REAL PATH!! WHY RELATIVE нельзя???
        const { city, page } = context.query;
        
        const res = await axios.get(`http://localhost:3000/api/items/city/${city}/${page}`);
        const cityCoordinates = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${process.env.MAP_KEY}`);
        //const { lat, lng } = cityCoordinates.data.results[0].geometry.location;
        const { lat, lng } = cityCoordinates && cityCoordinates.data.results[0] ? cityCoordinates.data.results[0].geometry.location : '';

        return {
            items: res.data.items,
            count: res.data.count,
            pages: res.data.pages,
            page: res.data.page,
            cityLatLng: {lat, lng}
        } 

    } catch(err) {
        console.log(err)
    }

} 

const Inner = styled.div`
max-width: ${props => props.theme.maxWidth};
margin: 0 auto;
padding: 2rem;
display: grid;
justify-content: center;
`;

export default City;