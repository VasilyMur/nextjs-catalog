import Link from 'next/link';
import NavStyles from './styles/NavStyles';


const Nav = () => (
        <NavStyles data-test="nav">
            <li>
                <Link href="/add">
                    <a>Add</a>
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
                    <a>
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
                    <a>
                        Moscow
                    </a>
                </Link>
            </li>

            <li>
                <Link href="/places">
                    <a>London</a>
                </Link>
            </li>

            <li>
                <Link href="/register">
                    <a>Register</a>
                </Link>
            </li>
            
            <li>
                <Link href="/login">
                    <a>Login</a>
                </Link>
            </li>

            </NavStyles>
  );
  
  export default Nav;