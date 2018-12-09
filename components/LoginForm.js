import axios from 'axios';
import FormStyles from './styles/FormStyles';
import Router from 'next/router';



class LoginForm extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {   
        const value = e.target.value;
        const name = e.target.name;
        this.setState({ [name]: value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        await axios.post('/api/items/login', user).then(res => {
            console.log('Response -> Success', user)
            console.log(res);
            //Router.push( '/add');
        });

    }

    render() {
        return(
            <React.Fragment>
                <h2>Login Form</h2>
                <FormStyles onSubmit={this.handleSubmit}>
                    <label> 
                        Email
                        <input  value={this.props.email}  type="email" placeholder='Email' name='email' onChange={this.handleChange} />
                    </label>
                    <label> 
                        Password
                        <input  value={this.props.password}  type="text" placeholder='Password' name='password' onChange={this.handleChange} />
                    </label>
                    <button type="submit">Login</button>
                </FormStyles>
            </React.Fragment>
        )
    }
}


export default LoginForm;