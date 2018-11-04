import styled from 'styled-components';

class LocationContainer extends React.Component {
    render() {
        const { address, phone, url } = this.props.data;
        return (
            <Container>
                <p>Address: {address}</p>
                <p>Phone: {phone}</p>
                <p>Website: {url}</p>
                <p>Entrance Fee: 30$</p>
                <p>Lap Dances from: 20$</p>
                <p>Girls per Shift: 12</p>
            </Container>
        )
    }
};

const Container = styled.div`
  background: #303030;
  color: white;
  display: inline-block;
  width: 100%;
  padding: 1rem;
  border-left: 4px solid #d64541;
  p {
    margin: 0;
    line-height: 1.5;
  }
`;

export default LocationContainer;