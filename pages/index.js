import axios from 'axios';
import Items from '../components/Items';
import styled from 'styled-components';


const Index = (props) => {
        return (
            <Inner>
                <Items items={props.items}/>
            </Inner>
        )
}


Index.getInitialProps = async function() {
    // CHANGE!!!!! to REAL PATH!! WHY RELATIVE нельзя???
    const res = await axios.get('http://localhost:3000/api/items/all')

    return {
        items: res.data.items,
        count: res.data.count
    }  
} 

const Inner = styled.div`
max-width: ${props => props.theme.maxWidth};
margin: 0 auto;
padding: 2rem;
`;

export default Index