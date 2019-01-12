import axios from 'axios';
import StatePage from '../components/State';
import styled from 'styled-components';

import { getBlogPostAPI } from '../api';
// We create this in just a tick
//import { linkResolver } from '../helpers';

const State = (props) => {
        return (
            <Inner>
                <StatePage {...props}/>
            </Inner>
        ) 
}
  
  
 
State.getInitialProps = async function(context) {
    try {
        // CHANGE!!!!! to REAL PATH!! WHY RELATIVE нельзя???
        const { state } = context.query;
        const res = await axios.get(`http://localhost:3000/api/items/state/${state}`);
        const stateCoordinates = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${state}&key=${process.env.MAP_KEY}`);
        const { lat, lng } = stateCoordinates && stateCoordinates.data.results[0] ? stateCoordinates.data.results[0].geometry.location : '';

        const text = await getBlogPostAPI(`${state}`);
        //const text = await getBlogPostsAPI({ pageSize: 5 });
 
        return {
            items: res.data.items,
            count: res.data.total,
            stateLatLng: {lat, lng},
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

export default State;