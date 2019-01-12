import React from 'react';
import styled from 'styled-components';
import Item from '../Item';
import Pagination from './pagination';

import MapContainer from '../../components/GoogleMap/MapContainer.js';
import TextContainer from '../TextContainer';
import NextSeo from 'next-seo';
import { capetalize } from '../../helpers';

class CityPage extends React.Component {

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
        const { items, allItems, page, pages, count, query, cityLatLng, text } = this.props;
        const { page: realPage } = this.props.query;

        const { clientUser } = this.state;

        if(!items.length) {
            const e = new Error("Response not found");
            e.code = "ENOENT";  // Triggers a 404
            throw e;
        }
        //if(!items.length) return null;

        const { city, state } = query;
        const cityHeader = capetalize(city);

        
        return (
            <React.Fragment>
                <NextSeo
                    config={{
                    noindex: realPage === '0' ? false : true,
                    canonical: `/city/${city}`,
                    title: `${cityHeader} strip clubs 2019 - photos, location and reviews`,
                    description: `Best strip clubs in ${cityHeader}: Explore our online list of the top strip clubs based on location, hours, guest reviews and photos.`,
                    openGraph: {
                      type: 'website',
                      locale: 'en_US',
                      url: 'https://www.test.com/',
                      title: `${cityHeader} strip clubs 2019 - photos, location and reviews`,
                      description: `Best strip clubs in ${cityHeader}: Explore our online list of the top strip clubs based on location, hours, guest reviews and photos.`,
                      site_name: 'Stripio',
                    }
                }}/> 

                <h1>{cityHeader} Strip Clubs</h1>
 
                { allItems.length ? <MapContainer mapCenter={cityLatLng} zoom={12} markers={allItems.map(res=> {
                    return {
                        position: {lat: res.location.coordinates[1], lng: res.location.coordinates[0]},
                        name: res.name,
                        city,
                        state,
                        address: res.location.address,
                        slug: res.slug 
                    }
                })} /> : null }

                <TextContainer textData={text}/>
                <ItemsList>{items.map((item, i) => {
                    return <Item clientUser={clientUser} item={item} key={i}/>
                })}</ItemsList>
                    <Pagination state={state} city={city} page={page} pages={pages} count={count}/>
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

export default CityPage;