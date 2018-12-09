import styled from 'styled-components'
import AddForm from '../components/Form/AddForm'



class Add extends React.Component {


    render() {
        return (
            <Inner>
                <h1>Add Item</h1>
                <Container>
                    <AddForm />
                </Container>
            </Inner>
        )
    }
}


// Add.getInitialProps = async function(ctx) {
//    console.log(ctx)
//     // try {
//     //   const { id } = context.query
//     //   const res = await axios.get(`http://localhost:3000/api/items/single/${id}`)
//     //   const item = res.data
    
//     //   return { item };
  
//     // } catch(err) {
//     //   console.log(err)
//     // }
  
//   }

const Container = styled.div`
  max-width: 555px;
  margin: 0 auto;
`;

const Inner = styled.div`
max-width: ${props => props.theme.maxWidth};
margin: 0 auto;
padding: 2rem;
`;


export default Add