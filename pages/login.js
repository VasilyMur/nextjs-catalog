import LoginForm from '../components/LoginForm';
import styled from 'styled-components';

const Login = (props) => {
        return (
            <Inner>
                <LoginForm {...props}/>
            </Inner>
        ) 
}
  

const Inner = styled.div`
max-width: ${props => props.theme.maxWidth};
margin: 0 auto;
padding: 2rem;
display: grid;
justify-content: center;
`;

export default Login;