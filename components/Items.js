import React from 'react';
import styled from 'styled-components';
import Item from './Item';

const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${props => props.theme.maxWidthFrontAll};
  margin: 0 auto;
    &:first-child {
        border-top: 1px solid ${props => props.theme.offWhite};
    }
`;

class Items extends React.Component {
    render() {

        return (
            <React.Fragment>
                <h1>All Items</h1>
                    <ItemsList>{this.props.items.map((item, i) => {
                        return <Item item={item} key={i}/>
                    })}</ItemsList>
            </React.Fragment>
        )
    }
}

export default Items