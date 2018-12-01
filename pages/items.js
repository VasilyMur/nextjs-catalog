import axios from 'axios';
import AllItems from '../components/AllItems';
import styled from 'styled-components';
import Head from 'next/head';

const Items = (props) => {
        return (
            <Inner>
                <Head>
                    <title>
                        Sick Fits! — Page {props.page} of {props.pages}
                    </title>
                </Head>
                <AllItems {...props}/>
            </Inner>
        )
}

 

Items.getInitialProps = async function(context) {
    try {
        // CHANGE!!!!! to REAL PATH!! WHY RELATIVE нельзя???
        const { page } = context.query;
        const res = await axios.get(`http://localhost:3000/api/items/all/${page}`)

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

export default Items;