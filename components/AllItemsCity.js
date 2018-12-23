import React from 'react';
import styled from 'styled-components';
import Item from './Item';
import PaginationCity from './PaginationCity';
import StaticMap from './StaticMap';
import Head from 'next/head';

class AllItemsCity extends React.Component {

    state = {
        clientUser: '',
    }
 
    componentDidMount() {
        const sessionParsed = JSON.parse(document.getElementById('session').textContent);
        if ( sessionParsed.passport ) {
            const { user } = sessionParsed.passport;
            this.setState({ clientUser: user });
        }
    }

     
    render() {
        const { items, page, pages, count, query, cityLatLng } = this.props;
        const { clientUser } = this.state;

        if(!items.length) {
            const e = new Error("Response not found");
            e.code = "ENOENT";  // Triggers a 404
            throw e;
        }
        //if(!items.length) return null;

        const { city } = query;
        const removeHyphen = city.replace(/-/g, ' ');
        const cityCap = removeHyphen.split(' ');
        const cityHeader = cityCap.map(res => {
            return res.charAt(0).toUpperCase() + res.slice(1);
        }).join(' ');
 
        const metaTitleMain = `${cityHeader} strip clubs - top ratings, locations and reviews`;
        const metaTitlePaginated = `${cityHeader} clubs - page ${page} of ${pages}`;

        return (
            <React.Fragment>
                 <Head>
                    <title>
                        { query.page === '0' ? metaTitleMain : metaTitlePaginated }
                    </title>
                </Head>
                <h1>{cityHeader} Strip Clubs</h1>
                <StaticMap cityLatLng={cityLatLng} city={city}/>
                    <ItemsList>{items.map((item, i) => {
                        return <Item clientUser={clientUser} item={item} key={i}/>
                    })}</ItemsList>
                    <PaginationCity city={query.city} page={page} pages={pages} count={count}/>
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

export default AllItemsCity;