import Link from 'next/link';
import NavStyles from '../styles/NavStyles';
import Cities from './Components/cities';
import styled from 'styled-components';
import axios from 'axios';

class Nav extends React.Component {

    state = {
        hover: false,
    }

    handleMouseOver = () => {
        const hover = this.state.hover;
        this.setState({ hover: !hover });
    }

    handleLogOut = (e) => {
        e.preventDefault();
        console.log('Logging Out!!')
        axios.get('http://localhost:3000/api/items/logout').then(res => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
        const { hover } = this.state;
        return (
            <React.Fragment>
                <NavStyles data-test="nav">
                <li>
                    <Link href="/add">
                        <a className="city-main" >Add</a>
                    </Link>
                </li>

                <li>
                    <Link
                        prefetch
                        as={`/city/new-york`}
                        href={{
                        pathname: '/city',
                        query: { city: 'new-york', page: 0 },
                        }}>
                        <a className="city-main">
                            New York
                        </a> 
                    </Link>
                </li>

                <li>
                    <Link
                        prefetch
                        as={`/city/moscow`}
                        href={{
                        pathname: '/city',
                        query: { city: 'moscow', page: 0 },
                        }}>
                        <a className="city-main">
                            Moscow
                        </a>
                    </Link>
                </li>

                <li onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseOver} >
                    <a href="#" className="city-main" >Cities</a>
                        { hover ? <Cities /> : ''}
                </li>

                <li>
                    <Link href="/register">
                        <a className="city-main" >Register</a>
                    </Link>
                </li>
                
                <li>
                    <Link href="/login">
                        <a className="city-main">Login</a>
                    </Link>
                </li>

                <li>
                    <a className="city-main" onClick={this.handleLogOut}>Logout</a>
                </li>

                </NavStyles>
             
            
                
            </React.Fragment>
        )
    }
}
       

  
  export default Nav;