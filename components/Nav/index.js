import axios from 'axios';
import Link from 'next/link';
import NavStyles from '../styles/NavStyles';
import Cities from './Components/cities';

class Nav extends React.Component {

    state = {
        hover: false,
        clientUser: ''
    }

    componentDidMount() {
        const sessionParsed = JSON.parse(document.getElementById('session').textContent);
        if ( sessionParsed.passport ) {
            const { user } = sessionParsed.passport;
            this.setState({ clientUser: user });
        }
    }

    handleMouseOver = () => {
        const hover = this.state.hover;
        this.setState({ hover: !hover });
    }

    handleLogOut = (e) => {
        e.preventDefault();
        console.log('Logging Out!!')
        axios.get('http://localhost:3000/api/items/logout').then(res => {
        window.location = '/';

        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
        const { hover, clientUser } = this.state;

        return (
            <React.Fragment>
                <NavStyles data-test="nav">
                { clientUser ? <li>
                    <a href="/add" className="city-main" >Add</a> 
                </li> : null }
  
                <li>
                    <Link
                        prefetch
                        as={`/marijuana-dispensaries/new-york`}
                        href={{
                        pathname: '/state',
                        query: { state: 'new-york' },
                        }}>
                        <a className="city-main">
                            New York
                        </a> 
                    </Link>
                </li>

                <li>
                    <Link
                        prefetch
                        as={`/marijuana-dispensaries/arizona`}
                        href={{
                        pathname: '/state',
                        query: { state: 'arizona', page: 0 },
                        }}>
                        <a className="city-main">
                            Arizona
                        </a>
                    </Link>
                </li>

                <li onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseOver} >
                    <a href="#" className="city-main" >All Cities</a>
                        { hover ? <Cities /> : ''}
                </li>

               { clientUser ?  <li> <a href="#" className="city-main" onClick={this.handleLogOut}>Log Out</a></li> : null }
                

                </NavStyles>
             
            
                
            </React.Fragment>
        )
    }
}
       

  
  export default Nav;