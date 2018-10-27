import styled from 'styled-components';
import axios from 'axios';
import AddForm from '../components/AddForm';



class Update extends React.Component {

    render() {
        return (
            <React.Fragment>
                <h1>Update Item</h1>
                <Container>
                    <AddForm item={this.props.item} id={this.props.query.id}/>
                </Container>
            </React.Fragment>
        )
    }
}

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

Update.getInitialProps = async function(context) {
    const { id } = context.query
    // !!!!!!!!!!!!! CHANGE LOCALHOST -->> to Relative Address!!
    const res = await axios.get(`http://localhost:3000/api/items/edit/${id}`);
    const item = {
        address: res.data.location.address,
        city: res.data.city,
        description: res.data.description,
        lat: res.data.location.coordinates[1],
        lng: res.data.location.coordinates[0],
        name: res.data.name,
        phone: res.data.phone,
        url: res.data.url,
        schedule: {
            monday: res.data.schedule.monday,
            tuesday: res.data.schedule.tuesday,
            wednesday: res.data.schedule.wednesday,
            thursday: res.data.schedule.thursday,
            friday: res.data.schedule.friday,
            saturday: res.data.schedule.saturday,
            sunday: res.data.schedule.sunday,
        },
        slug: res.data.slug,
    }
  
   return { item };
  }


export default Update;