import axios from 'axios';
import AllItemsCity from '../components/AllItemsCity';
import styled from 'styled-components';

import { getBlogPostAPI } from '../api';
// We create this in just a tick
//import { linkResolver } from '../helpers';

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
        const { lat, lng } = cityCoordinates && cityCoordinates.data.results[0] ? cityCoordinates.data.results[0].geometry.location : '';

        const text = await getBlogPostAPI(`${city}`);
        //const text = await getBlogPostsAPI({ pageSize: 5 });

        return {
            items: res.data.items,
            count: res.data.count,
            pages: res.data.pages,
            page: res.data.page,
            cityLatLng: {lat, lng},
            text
        } 

    } catch(err) {
        console.log(err)
    }

} 

const Inner = styled.div`
max-width: ${props => props.theme.maxWidth};
margin: 0 auto;
padding: ${props => props.theme.innerPadding};
display: grid;
justify-content: center;
`;

export default City;