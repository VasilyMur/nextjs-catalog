
import styled from 'styled-components';

const Item = styled.div`
    background: white;
    border: 1px solid ${props => props.theme.offWhite};
    box-shadow: ${props => props.theme.bs};
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
`;




export default Item;