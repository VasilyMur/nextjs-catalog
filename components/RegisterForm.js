import axios from 'axios';
import FormStyles from './styles/FormStyles';
import Router from 'next/router';



class RegisterForm extends React.Component {
    state = {
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        error: ''
    }

    handleChange = (e) => {   
        const value = e.target.value;
        const name = e.target.name;
        this.setState({ [name]: value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            confirm: this.state.confirmPassword
        }

        if(this.state.password !== this.state.confirmPassword) {
            console.log('Passwords DONT Match!')
            this.setState({ error: 'Passwords Dont Match' })
        } else {
            await axios.post('/api/items/register', user).then(res => {
                console.log('Response -> Success', user)
                console.log(res.config.data);
                //Router.push( '/add');

            }).catch((err) => {
                console.log(err)
            })
            this.setState({ name: '', password: '', confirmPassword: '', error: '', email: '' });
        }
    }

// password-confirm - when sending API!!

    render() {
        const { name, email, password, confirmPassword } = this.props;
        return(
            <React.Fragment>
                <h2>Register Form</h2>
                <FormStyles onSubmit={this.handleSubmit}>
                    <label> 
                        Name
                        <input  value={name}  type="text" placeholder='Name' name='name' onChange={this.handleChange} />
                    </label>
                    <label> 
                        Email
                        <input  value={email}  type="email" placeholder='Email' name='email' onChange={this.handleChange} />
                    </label>
                    <label> 
                        Password
                        <input  value={password}  type="text" placeholder='Password' name='password' onChange={this.handleChange} />
                    </label>
                    <label> 
                        Confirm Password
                        <input  value={confirmPassword}  type="text" placeholder='Confirm Password' name='confirmPassword' onChange={this.handleChange} />
                    </label>
                    <button type="submit">Login</button>
                </FormStyles>
            </React.Fragment>
        )
    }
}


export default RegisterForm;