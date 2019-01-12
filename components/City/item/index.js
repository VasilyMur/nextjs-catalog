import styled from 'styled-components';
import Link from 'next/link';
import ItemStyles from '../../styles/ItemStyles';
import { capetalize } from '../../../helpers';

class Item extends React.Component {
 
 
    render() {
        const { item, user, clientUser } = this.props;
        const { city, state, slug, image, name, _id, location, description } = item;

        return (
            <ItemStyles>
                <ImgContainer> 
                    {image && <img src={image} alt={name} />}
                    { user || clientUser ? <EditLink><a href={`/update/${_id}`}>Edit ✏️</a></EditLink> : '' }
                </ImgContainer>

                <DescriptionContainer>
                    <h2><Link as={`/marijuana-dispensaries/${state}/${city}/${slug}`} href={ {pathname: '/item', query: {id: slug}} }><a>{name}</a></Link></h2>
                    <address>{location.address}</address>
                    <City>{capetalize(city)}</City>
                    <Hours><span>Tuesday</span>: 10:00 - 22:00 </Hours>  
                    <Description><p>{description.split(' ').slice(0, 27).join(' ')}... <Link as={`/marijuana-dispensaries/${state}/${city}/${slug}`} href={ {pathname: '/item', query: {id: slug}} }><a>read more</a></Link></p></Description>  
                </DescriptionContainer>
            </ItemStyles>
        )
    }
}

const ImgContainer = styled.div`
    position: relative;
    padding: 10px 0;
`;

const DescriptionContainer = styled.div`
    padding: 10px 0;
`;

const Hours = styled.div`
    display: flex;
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
        transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
        left: 50%;
        margin-top: 1.8rem;
        }
        &:hover,
        &:focus {
        outline: none;
        &:after {
            width: 60px;
        }
        }
    }

`;

const EditLink = styled.div`
    position: absolute;
    top: 10px;
    left: 0;
    right: 0;
    text-align: center;
    background: rgba(0, 0, 0, 0.5);
    padding: 5px 0;
    a {
        color: #fff;
    }
`;

export default Item