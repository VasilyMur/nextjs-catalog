import React from 'react';
import styled from 'styled-components';
import Item from './Item';
import Pagination from './Pagination';


class AllItems extends React.Component {
    state = {
        clientUser: ''
    } 

    componentDidMount() {
        const sessionParsed = JSON.parse(document.getElementById('session').textContent);
        if ( sessionParsed.passport ) {
            const { user } = sessionParsed.passport;
            this.setState({ clientUser: user });
        }
    }


    render() {
        const { items, page, pages, count, name, user } = this.props.items;
        const { clientUser } = this.state;
        if(!items.length) return null;
         


        return (
            <React.Fragment>
                <h1>{name}</h1>
                    <ItemsList>{items.map((item, i) => {
                        return <Item clientUser={clientUser} user={user} item={item} key={i}/>
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