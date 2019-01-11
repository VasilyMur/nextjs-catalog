import React from 'react';
import styled from 'styled-components';
import ItemState from './ItemState';
import StaticMapState from './StaticMapState';
import TextContainer from './TextContainer';
import NextSeo from 'next-seo';
import { capetalize } from '../helpers';

class AllItemsState extends React.Component {


     
    render() {
        const { items, query, stateLatLng, text } = this.props;
        const { page: realPage } = this.props.query;

        if(!items.length) return null;

        const { state } = query;
        const stateHeader = capetalize(state);
 
        
        return (
            <React.Fragment>
                <NextSeo
                    config={{
                    noindex: realPage === '0' ? false : true,
                    canonical: `/state/${state}`,
                    title: `${stateHeader} strip clubs 2019 - photos, location and reviews`,
                    description: `Best strip clubs in ${stateHeader}: Explore our online list of the top strip clubs based on location, hours, guest reviews and photos.`,
                    openGraph: {
                      type: 'website',
                      locale: 'en_US',
                      url: 'https://www.test.com/',
                      title: `${stateHeader} strip clubs 2019 - photos, location and reviews`,
                      description: `Best strip clubs in ${stateHeader}: Explore our online list of the top strip clubs based on location, hours, guest reviews and photos.`,
                      site_name: 'Stripio',
                    }
                }}/>

                <h1>{stateHeader} Marijuana Dispenseries</h1>
                <StaticMapState latLng={stateLatLng} state={state}/>
                <TextContainer textData={text}/>

                <ItemsList>{items.map((item, i) => {
                    return <ItemState item={item} key={i}/>
                })}</ItemsList>
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

export default AllItemsState;