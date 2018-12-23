import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import styled from 'styled-components';

const Login = (props) => {
        return (
            <Inner>
                <LoginForm {...props}/>
                <RegisterForm {...props}/>
            </Inner>
        ) 
}
  

const Inner = styled.div`
max-width: ${props => props.theme.maxWidth};
margin: 0 auto;
padding: ${props => props.theme.innerPadding};
display: grid;
justify-content: center;
`;

export default Login;