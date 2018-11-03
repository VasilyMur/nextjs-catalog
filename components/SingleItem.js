import React, { Component } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import MapContainer from './GoogleMap/MapContainer';

const SingleItemStyles = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: ${props => props.theme.bs};
  display: grid;
  grid-template-rows: auto;
  min-height: 800px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .details {
    margin: 3rem;
    font-size: 2rem;
  }
`;


class SingleItem extends Component {

  render() {

    const { name, largeImage, title, location, phone, url, description } = this.props.item;
    const [ lng, lat ] = location.coordinates;

    const address = location.address;

    return (
      <React.Fragment>
          <SingleItemStyles>
              <Head>
                <title>Клуб | {name}</title>
              </Head>
              <img src={largeImage} alt={title} />
              <div className="details">
                <h1>{name}</h1>
                <p>{address}</p>
                <p>{phone}</p>
                <p>{url}</p>
                <p>{description}</p>
                {/* <p>{this.props.item.schedule}</p> */}
              </div>
          </SingleItemStyles>
          <MapContainer marker={{ lat, lng }} club={{ name, address }}/>
        </React.Fragment>
        );
  }
}

export default SingleItem;