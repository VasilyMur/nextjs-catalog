import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';

class TextContainer extends React.Component {
    render() {
        const { textData } = this.props;
        if(!textData) return null;
        return(
             <Container> { RichText.render(textData.data.body) }</Container>
        )
    }
}

const Container = styled.div`
`;


export default TextContainer;