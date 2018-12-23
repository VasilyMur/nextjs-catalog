import styled from 'styled-components';
import Link from 'next/link';
 
class Cities extends React.Component {

    render() {

        const usCities = [ 
            {name: 'New York', slug: 'new-york' },
            {name: 'Miami', slug: 'miami' },
            {name: 'Los Angeles', slug: 'los-angeles' },
            {name: 'Chicago', slug: 'chicago' },
        ]
        const nonUsCities = [ 
            {name: 'London', slug: 'london' },
            {name: 'Moscow', slug: 'moscow' },
            {name: 'Kiev', slug: 'kiev' },
        ]

        return (
            <Container>
                <Wrapper>
                    <Country>
                        <Name>United States</Name>
                        <Places>
                            {usCities.map((res, i) => {
                                return <Link key={i} prefetch as={`/city/${res.slug}`} href={ {pathname: '/city', query: { city: `${res.slug}`, page: 0 }} }>
                                            <a>{res.name}</a></Link>
                            })}
                        </Places>
                    </Country>

                    <Country>
                        <Name>Rest of the World</Name>
                        <Places>
                            {nonUsCities.map((res, i) => {
                                return <Link key={i} prefetch as={`/city/${res.slug}`} href={ {pathname: '/city', query: { city: `${res.slug}`, page: 0 }} }>
                                            <a>{res.name}</a></Link>
                            })}
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
    width: 100%;
    right: 0;
    z-index: 99999;
    background: #fff;
    text-transform: uppercase;
    display: flex;
    justify-content: flex-end;
`;

const Wrapper = styled.div`
    padding: 12px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    max-width: 600px;
    margin-bottom: 2rem;
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
        line-height: 1.8;
        font-size: 1.4rem;
        font-weight: 500;
        color: #646464;
    }
    a:hover {
        color: ${props => props.theme.red};
    }
`;

export default Cities;