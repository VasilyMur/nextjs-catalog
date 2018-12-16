import styled from 'styled-components';
import AddForm from '../components/Form/AddForm';



const Add = (props) => {

    return (
        <Inner>
        <h1>Add Item</h1>
        <Container>
            <AddForm {...props}/>
        </Container>
    </Inner>
    )
}




Add.getInitialProps = async function({ req }) { 
    
    try {
        const user = req && req.user ? req.user : '';
        // CHANGE!!!!! to REAL PATH!! WHY RELATIVE нельзя???
        // const res = await axios.get('http://localhost:3000/api/items/all')
        return {
            user: user
        }
    } catch(err) {
        console.log(err)
    }

} 



const Container = styled.div`
  max-width: 555px;
  margin: 0 auto;
`;

const Inner = styled.div`
max-width: ${props => props.theme.maxWidth};
margin: 0 auto;
padding: 2rem;
`;


export default Add;