import styled from 'styled-components';
import AddForm from '../components/Form/AddForm';



const Add = (props) => {

    return (
        <Inner>
        <Container>
            <AddForm {...props}/>
        </Container>
    </Inner>
    )
}




Add.getInitialProps = async function({ req }) {   
    try {
        const user = req && req.user ? req.user : '';
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
padding: ${props => props.theme.innerPadding};
`;


export default Add;