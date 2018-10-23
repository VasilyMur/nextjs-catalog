import axios from 'axios';
import Items from '../components/Items';


const Index = (props) => {
        return (
            <React.Fragment>
                <Items items={props.items}/>
            </React.Fragment>
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


export default Index