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
                <Link href="/tours">
                    <a>Tours</a>
                </Link>
            </li>

            <li>
                <Link href="/guides">
                    <a>Guides</a>
                </Link>
            </li>

            <li>
                <Link href="/places">
                    <a>Places</a>
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