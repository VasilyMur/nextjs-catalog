import axios from 'axios';
import AllItemsCity from '../components/AllItemsCity';
import styled from 'styled-components';
import Head from 'next/head';

const City = (props) => {
        return (
            <Inner>
                <Head>
                    <title>
                        Sick Fits! — Page {props.page} of {props.pages}
                    </title>
                </Head>
                <AllItemsCity {...props}/>
            </Inner>
        )
}



City.getInitialProps = async function(context) {
    try {
        // CHANGE!!!!! to REAL PATH!! WHY RELATIVE нельзя???
        const { city } = context.query;
        const res = await axios.get(`http://localhost:3000/api/items/city/${city}`)

        return {
            items: res.data.items,
            count: res.data.count,
            pages: res.data.pages,
            page: res.data.page,
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