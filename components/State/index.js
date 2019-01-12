import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Item from './item';
import MapContainer from '../GoogleMap/MapContainer.js';
import TextContainer from '../TextContainer';
import NextSeo from 'next-seo';
import { capetalize } from '../../helpers';

class StatePage extends React.Component {

    state = {
        allCityLatLng: []
    }

    componentDidMount() {
        this.getCitiesLatLng();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.items !== this.props.items) {
            this.getCitiesLatLng();
        }
    }


    getCitiesLatLng = () => {
        const result = this.props.items.map( async (res) => {
            const coordinates = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${res._id}&key=${process.env.MAP_KEY}`);
            const { lat, lng } = coordinates && coordinates.data.results[0] ? coordinates.data.results[0].geometry.location : '';
            return { city: res._id, location: [ lat, lng ], count: res.count }
        });
        Promise.all(result).then(res => {
            this.setState({ allCityLatLng: res });
        })
    }

     
    render() {
        const { items, query, stateLatLng, text } = this.props;
        const  { allCityLatLng } = this.state;

        if(!items.length) return null;

        const { state } = query;
        const stateHeader = capetalize(state);
 
        
        return (
            <React.Fragment>
                <NextSeo
                    config={{
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
 
                { allCityLatLng.length ? <MapContainer statePage={true} mapCenter={stateLatLng} zoom={9} markers={allCityLatLng.map(res=> {
                    const name = capetalize(res.city);
                    return {
                        position: {lat: res.location[0], lng: res.location[1]},
                        name,
                        state,
                        count: res.count,
                        city: res.city,
                    } 
                })} /> : null }

                <TextContainer textData={text}/>
                <ItemsList>{items.map((item, i) => {
                    return <Item state={state} item={item} key={i}/>
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

export default StatePage;