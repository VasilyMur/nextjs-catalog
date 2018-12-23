import styled, { consolidateStreamedStyles } from 'styled-components';
import axios from 'axios';
import AddForm from '../components/Form/AddForm';



class Update extends React.Component {


    render() {
        const { item, query, user } = this.props;
        if  (!item.name || !query.id) return null;

        return (
            <Inner>
                <Container>
                    <AddForm item={item} id={query.id} user={user}/>
                </Container>
            </Inner>
        )
    }
}

const Container = styled.div` 
  max-width: 600px;
  margin: 0 auto;
`;

const Inner = styled.div`
max-width: ${props => props.theme.maxWidth};
margin: 0 auto;
padding: 2rem;
`;
  
Update.getInitialProps = async function({req}) {
    try {
        const { id } = req.params;
        const user = req.user ? req.user : '';
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
            image: res.data.image,
            largeImage: res.data.largeImage,
        }      

       return { item, user };

    }catch(err) {
        const e = new Error("Response not found");
        e.code = "ENOENT";  // Triggers a 404
        throw e;
    }

  }


export default Update;