import SingleItem from '../components/SingleItem';

const Item = (props) => (

  <React.Fragment>
      <SingleItem id={props.query.id} />
    </React.Fragment>

)


Item.getInitialProps = async function(context) {
  const { id } = context.query
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a0145da41926c0453f66b9462ce90e0c`)
  const movie = await res.json();

  //console.log(movie.title)
  return { movie };
}

export default Item;