import SingleItem from '../components/SingleItem';
import axios from 'axios';

const Item = (props) => (

  <React.Fragment>
      <SingleItem {...props} />
    </React.Fragment>

)


Item.getInitialProps = async function(context) {
  const { id } = context.query
  const res = await axios.get(`http://localhost:3000/api/items/single/${id}`)
  const item = res.data

  return { item };
}

export default Item;