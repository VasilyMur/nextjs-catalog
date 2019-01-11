import styled from 'styled-components';
import Link from 'next/link';
import ItemStyles from './styles/ItemStyles';
import StaticMap from './StaticMap';
import { capetalize } from '../helpers';
import axios from 'axios';


class ItemState extends React.Component {

    state = {
        latLng: {}
    }

    componentDidMount(){
        const city = this.props.item._id;
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${process.env.MAP_KEY}`).then(res => {
            const { lat, lng } = res && res.data.results[0] ? res.data.results[0].geometry.location : '';
            const latLng = { lat, lng };
            this.setState({ latLng })
        });
    } 
  
    render() {
        const  { latLng } = this.state;
        const { item } = this.props;
        const { _id, count } = item;
        const city = capetalize(_id);

        

        return (
            <ItemStyles>
                <StaticMap cityLatLng={latLng} city={city}/>
                <DescriptionContainer>
                <h2><Link prefetch as={`/city/${city}`} href={ {pathname: '/city', query: {city: `${city}`, page: 0 }} }><a>{city}</a></Link></h2>
                <City>There are {count} weed dispensaries found in {city}</City>
                <Description><Link prefetch as={`/city/${city}`} href={ {pathname: '/city', query: {city: `${city}`, page: 0 }} }><a>View All {city} Dispensaries</a></Link></Description>  

                </DescriptionContainer>

                {/* <DescriptionContainer>
                    <h2><Link as={`/city/${item.city}/${item.slug}`} href={ {pathname: '/item', query: {id: item.slug}} }><a>{item.name}</a></Link></h2>
                    <address>{item.location.address}</address>
                    <City>{capetalize(item.city)}</City>
                    <Hours><span>Tuesday</span>: 10:00 - 22:00 </Hours>  
                    <Description><p>{item.description.split(' ').slice(0, 27).join(' ')}... <Link as={`/city/${item.city}/${item.slug}`} href={ {pathname: '/item', query: {id: item.slug}} }><a>read more</a></Link></p></Description>  
                </DescriptionContainer> */}
            </ItemStyles>
        )
    }
}



const DescriptionContainer = styled.div`
    padding: 10px 0;
`;


const City = styled.div`
    display: flex;
`;

const Description = styled.div`
    a {
        color: ${props => props.theme.red};
        font-weight: 500;
        position: relative;
        &:after {
        height: 2px;
        background: red;
        content: '';
        width: 0;
        position: absolute;
        transform: translateX(-50%);
        transition: width 0.4s;
        transition-timing-function: cubic-bezier(1, -0.65, 0, 1.8);
        left: 50%;
        margin-top: 1.8rem;
        }
        &:hover,
        &:focus {
        outline: none;
        &:after {
            width: 80%;
        }
        }
    }

`;


export default ItemState;