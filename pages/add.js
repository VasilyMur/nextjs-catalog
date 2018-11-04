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