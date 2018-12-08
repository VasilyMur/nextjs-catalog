import Link from 'next/link';
import NavStyles from '../styles/NavStyles';
import Cities from './Components/cities';
import styled from 'styled-components';

class Nav extends React.Component {

    state = {
        hover: false,
    }

    handleMouseOver = () => {
        const hover = this.state.hover;
        this.setState({ hover: !hover });
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

                </NavStyles>
             
            
                
            </React.Fragment>
        )
    }
}
       

  
  export default Nav;