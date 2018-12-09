import axios from 'axios';
import LoginForm from '../components/LoginForm';
import styled from 'styled-components';

const Login = (props) => {
        return (
            <Inner>
                <LoginForm {...props}/>
            </Inner>
        ) 
}
 
 

// Login.getInitialProps = async function(context) {
//     try {
//         // CHANGE!!!!! to REAL PATH!! WHY RELATIVE нельзя???
//         const { city, page } = context.query;
//         const res = await axios.get(`http://localhost:3000/api/items/city/${city}/${page}`);
//         const cityCoordinates = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${process.env.MAP_KEY}`);
//         const { lat, lng } = cityCoordinates.data.results[0].geometry.location;

//         return {
//             items: res.data.items,

//         }  
//     } catch(err) {
//         console.log(err)
//     }

// } 

const Inner = styled.div`
max-width: ${props => props.theme.maxWidth};
margin: 0 auto;
padding: 2rem;
display: grid;
justify-content: center;
`;

export default Login;