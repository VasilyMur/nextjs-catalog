import styled from 'styled-components'
import AddForm from '../components/AddForm'



class Add extends React.Component {

    render() {
        return (
            <React.Fragment>
            <h1>Add Item</h1>
            <Container>
                <AddForm />
            </Container>
            </React.Fragment>
        )
    }
}

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;


export default Add