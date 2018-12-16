import FormStyles from './styles/FormStyles';
import axios from 'axios';

class LoginForm extends React.Component {
    state = {
        email: '',
        password: '',
    } 


    handleChange = (e) => {   
        const name = e.target.name;
        const value = e.target.value;
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
             console.log('NonError Response', res);
             window.location = '/';
        
         }).catch((err) => {
             console.log(err);
         })
         
     }

    render() {
        return(
            <React.Fragment>
                <h2>Login Form</h2>
                <FormStyles onSubmit={this.handleSubmit}>
                    <label> 
                        Email
                        <input  value={this.state.email}  type="email" placeholder='Email' name='email' onChange={this.handleChange} />
                    </label>
                    <label> 
                        Password
                        <input  value={this.state.password}  type="text" placeholder='Password' name='password' onChange={this.handleChange} />
                    </label>
                    <button type="submit">Login</button>
                </FormStyles>
            </React.Fragment>
        )
    }
}


export default LoginForm;