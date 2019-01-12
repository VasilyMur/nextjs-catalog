import Link from 'next/link';
import styled from 'styled-components';



const Footer = () => (
    <Container>
         <Link href="/">
          <a>© PotFumer.com</a>
        </Link>
    </Container>
);


const Container = styled.div`
    background: #1e2023;
    padding: 30px 0;
    text-align: center;
    a {
        color: #8ed1e9
    }
`;


export default Footer;