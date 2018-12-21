import styled from 'styled-components';
import Link from 'next/link';

class Cities extends React.Component {

    render() {
        return (
            <Container>
                <Wrapper>
                    <Country>
                        <Name>United States</Name>
                        <Places>
                            <Link prefetch as={`/new-york`} href={ {pathname: '/city', query: { city: 'new-york', page: 0 }} }>
                                <a>New York</a>
                            </Link>
                            <Link href="#"><a>Chicago</a></Link>
                            <Link href="#"><a>Las Vegas</a></Link>
                            <Link href="#"><a>Miami</a></Link>
                        </Places>
                    </Country>

                    <Country>
                        <Name>Rest of the World</Name>
                        <Places>
                        <Link prefetch as={`/moscow`} href={ {pathname: '/city', query: { city: 'moscow', page: 0 }} }>
                                <a>Moscow</a>
                            </Link>
                            <Link href="#"><a>London</a></Link>
                            <Link href="#"><a>Kiev</a></Link>
                            <Link href="#"><a>Paris</a></Link>
                        </Places>
                    </Country>
                </Wrapper>
            </Container>
        )
    }
}

const Container = styled.div`
    position: absolute;
    border-top: 10px solid #393939;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.15);
    top: calc(100%);
    width: 37%;
    right: 10px;
    z-index: 99999;
    background: #fff;
    text-transform: uppercase;
`;

const Wrapper = styled.div`
    padding: 12px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
`;

const Country = styled.div`
    padding: 15px;
`;

const Name = styled.div`
    font-weight: 700;
`;



const Places = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    a {
        line-height: 1.4;
        font-size: 1.4rem;
        font-weight: 500;
        color: #646464;
    }
    a:hover {
        color: ${props => props.theme.red};
    }
`;

export default Cities;