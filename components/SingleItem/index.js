import React, { Component } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import MapContainer from '../GoogleMap/MapContainer';
import LocationContainer from './components/LocationContainer';
import Schedule from './components/Schedule';

const SingleItemStyles = styled.div`
  margin: 2rem auto;
  box-shadow: ${props => props.theme.bs};
  padding: 0 0 4rem;
  img {
    max-width: 100%;
    object-fit: contain;
  }
`;

class SingleItem extends Component {

  render() {

    const { name, largeImage, title, location, phone, url, description, schedule } = this.props.item;
    const [ lng, lat ] = location.coordinates;
    const address = location.address;

    const locationData = { address, phone, url }

    return (
      <React.Fragment>
        <InnerSingleTop>
            <MapContainer marker={{ lat, lng }} club={{ name, address }}/>
            <SingleTitle>{name}</SingleTitle>
            <Head>
              <title>Клуб | {name}</title>
            </Head>
        </InnerSingleTop>

        <InnerSingle>

            <Main>
            <LocationContainer data={locationData}/>
            <SingleItemStyles>
                <ClubInfo>
                  <img src={largeImage} alt={title} />
                  <TextContainer>
                    <p>{description}</p>
                  </TextContainer>
                </ClubInfo>
            </SingleItemStyles>
            </Main>

            <Side>
              <ScheduleContainer>
                <HoursTitle>Operating Hours</HoursTitle>
                { Object.entries(schedule).map((res, i) => {
                    return  <Schedule key={i} day={res[0]} schedule={schedule[res[0]]}/>
                }) }
              </ScheduleContainer>
            </Side>

          </InnerSingle>

        </React.Fragment>
        );
  }
}

const InnerSingle = styled.div`
max-width: ${props => props.theme.maxWidthSingle};
margin: 0 auto;
padding: 2rem 0;

display: grid;
grid-template-columns: 1fr 250px;
grid-gap: 20px;
`;

const Main = styled.div`
`;
const Side = styled.div`
`;

const ClubInfo = styled.div`
  font-size: 1.8rem;
  line-height: 1.7;
`;

const ScheduleContainer = styled.div`
`;

const HoursTitle = styled.h3`
  background: #303030;
  color: #fff;
  font-size: 1.6rem;
  margin: 0;
`;

const TextContainer = styled.div`
  margin: 0 2rem 2rem;
`;

const InnerSingleTop = styled.div`
  max-height: 400px;
  position: relative;
`;

const SingleTitle = styled.h1`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  background: rgba(0, 0, 0, 0.7);
  padding: 5px 0 10px;
  color: #fff;
  margin: 0;
  font-weight: 700;
  font-size: 4rem;
  letter-spacing: 0.5px;
`;



export default SingleItem;