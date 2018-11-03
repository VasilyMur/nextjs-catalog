import styled from 'styled-components';

const Item = styled.div`
    background: white;
    border-bottom: 1px solid ${props => props.theme.offWhite};
    padding: 15px 0;
    /* box-shadow: ${props => props.theme.bs}; */
    position: relative;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 10px;
    font-size: 1.4rem;
    line-height: 1.3;
    img {
        width: 100%;
        height: 160px;
        object-fit: cover;
    }
    h2 {
        font-size: 2rem;
        margin: 0 0 0.5rem;
        text-align: left;
        line-height: 1.3;
    }
    address {
        margin: 0;
    }
    p {
        margin: 10px 0 0;
    }

`;




export default Item;