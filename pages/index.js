import styled from 'styled-components';
import axios from 'axios';
import Items from '../components/Items';


const Index = (props) => {
        return (
            <React.Fragment>
                <Items items={props.shows}/>
            </React.Fragment>
        )
}


Index.getInitialProps = async function() {
    const res = await axios.get('https://api.tvmaze.com/search/shows?q=batman')
    // console.log(res.data)
    //console.log(`Show data fetched. Count: ${data.length}`)
    return {
        shows: res.data
    }  
} 


export default Index