import styled from 'styled-components';
import PaginationStyles from './styles/PaginationStyles';
import Link from 'next/link';


class PaginationCity extends React.Component {

    render() {
  
        const {  page, pages, count, city } = this.props;

        return (
            <Container>
                <PaginationStyles>                

                    <Link 
                        prefetch
                        as={`/city/${city}/page/${page - 1}`}
                        href={{
                        pathname: '/city',
                        query: { page: page - 1, city: city },
                        }}>
                        <a className="prev" aria-disabled={page <= 1}>
                        ← Prev
                        </a>
                    </Link>
                    <p>Page { page } of { pages }!</p>
                    <p>{count} Items Total</p>
                    <Link
                        prefetch
                        as={`/city/${city}/page/${page + 1}`}
                        href={{
                        pathname: '/city',
                        query: { page: page + 1, city: city },
                        }}>
                        <a className="next" aria-disabled={page >= pages}>
                            Next →
                        </a>
                </Link>
                </PaginationStyles>
            </Container>
        )
    }
}

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

export default PaginationCity;
