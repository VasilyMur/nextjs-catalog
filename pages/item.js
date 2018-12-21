import SingleItem from '../components/SingleItem/index';
import axios from 'axios';


const Item = (props) => (

  <React.Fragment>
    <SingleItem {...props} />
  </React.Fragment>

)


Item.getInitialProps = async function(context) {
  try {
    const { id } = context.query
    const res = await axios.get(`http://localhost:3000/api/items/single/${id}`)
    const item = res && res.data ? res.data : '';
   
    return { item };

  } catch(err) {
      const e = new Error("Response not found");
      e.code = "ENOENT";  // Triggers a 404
      throw e;
  }

}



export default Item;