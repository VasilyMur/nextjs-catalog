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
    const item = res.data
  
    return { item };

  } catch(err) {
    console.log(err)
  }

}



export default Item;