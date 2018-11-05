import React from 'react';
import styled from 'styled-components';
import Item from './Item';
import Pagination from './Pagination';


class AllItems extends React.Component {

    render() {
        const { items, page, pages, count } = this.props;

        return (
            <React.Fragment>
                <h1>All Items</h1>
                    <ItemsList>{items.map((item, i) => {
                        return <Item item={item} key={i}/>
                    })}</ItemsList>
                    <Pagination page={page} pages={pages} count={count}/>
            </React.Fragment>
        )
    }
}


const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${props => props.theme.maxWidthFront};
  margin: 0 auto;
    &:first-child {
        border-top: 1px solid ${props => props.theme.offWhite};
    }
`;

export default AllItems;