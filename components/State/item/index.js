import styled from 'styled-components';
import Link from 'next/link';
import ItemStyles from '../../styles/ItemStyles';
import StaticMap from '../static-map';
import { capetalize } from '../../../helpers';



class Item extends React.Component {


  
    render() {

        const { item, state } = this.props;
        const { _id: city, count } = item;
        const headerCity = capetalize(city);

        

        return (
            <ItemStyles> 
                <StaticMap city={city} state={state}/>
                <DescriptionContainer>
                    <h2><Link prefetch as={`/marijuana-dispensaries/${state}/${city}`} href={ {pathname: '/city', query: {city: `${city}`, page: 0, state: `${state}` }} }><a>{headerCity}</a></Link></h2>
                    <City>We found {count} weed dispensaries in {headerCity}</City>
                    <Description><Link prefetch as={`/marijuana-dispensaries/${state}/${city}`} href={ {pathname: '/city', query: {city: `${city}`, page: 0, state: `${state}` }} }><a>View All {headerCity} Dispensaries</a></Link></Description>  
                </DescriptionContainer>
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


export default Item;