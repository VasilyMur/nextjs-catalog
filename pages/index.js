import axios from 'axios';
import AllItems from '../components/AllItems';
import styled from 'styled-components';


const Index = (props) => {
        return (
            <Inner>
                <AllItems {...props} name='Strip Club Reviews'/>
            </Inner>
        )
} 
 

Index.getInitialProps = async function({ req }) {

    try {
        // CHANGE!!!!! to REAL PATH!! WHY RELATIVE нельзя???
        const user = req && req.user ? req.user : '';
        const res = await axios.get('http://localhost:3000/api/items/all')

        return {
            items: res.data.items,
            count: res.data.count,
            pages: res.data.pages,
            page: res.data.page,
            user: user
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

export default Index