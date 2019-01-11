import styled from 'styled-components';
import PaginationStyles from './styles/PaginationStyles';
import Link from 'next/link';


class Pagination extends React.Component {

    render() {
  
        const {  page, pages, count } = this.props;
 
        return (
            <PaginationStyles>                

                <Link
                    prefetch
                    as={`/items/page/${page - 1}`}
                    href={{
                    pathname: '/items',
                    query: { page: page - 1 },
                    }}>
                    <a className="prev" aria-disabled={page <= 1}>
                    ← Prev
                    </a>
                </Link>
                <p>Page { page } of { pages }!</p>
                <TotalPages>{count} Items Total</TotalPages>
                <Link
                    prefetch
                    as={`/items/page/${page + 1}`}
                    href={{
                    pathname: '/items',
                    query: { page: page + 1 },
                    }}>
                    <a className="next" aria-disabled={page >= pages}>
                        Next →
                    </a>
            </Link>
            </PaginationStyles>
        )
    }
}

const TotalPages = styled.p`
    @media only screen and (max-width: 710px) {
      display: none;
    }
`;

export default Pagination;
