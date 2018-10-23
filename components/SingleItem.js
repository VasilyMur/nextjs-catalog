import React, { Component } from 'react';
import styled from 'styled-components';
import Head from 'next/head';

const SingleItemStyles = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: ${props => props.theme.bs};
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
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
    return (
        <SingleItemStyles>
            <Head>
              <title>Клуб | {this.props.item.name}</title>
            </Head>
            {/* <img src={item.largeImage} alt={item.title} /> */}
            <div className="details">
            <h1>{this.props.item.name}</h1>
            <p>{this.props.item.location.address}</p>
            <p>{this.props.item.phone}</p>
            <p>{this.props.item.url}</p>
            <p>{this.props.item.description}</p>
            {/* <p>{this.props.item.schedule}</p> */}
            </div>
        </SingleItemStyles>
        );
  }
}

export default SingleItem;