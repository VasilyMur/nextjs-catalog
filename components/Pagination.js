import styled from 'styled-components';
import PaginationStyles from './styles/PaginationStyles';
import Head from 'next/head';
import Link from 'next/link';


class Pagination extends React.Component {

    // handleClick = (e) => {
    //     this.props.handlePageChange(e.target.id);
    // } 

    render() {

        const {  page, pages, count } = this.props;

        // const pageNumbers = items.reduce((accum, curval, index) => {
        //     if ( index >= 1 && index <= Math.ceil(items.length / itemsPerPage)) {
        //         accum.push(index);
        //     }
        //     return accum;
        // }, [])


        return (
            <PaginationStyles>                
                <Head>
                    <title>
                        Sick Fits! — Page {page} of {pages}
                    </title>
                </Head>
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
                <p>{count} Items Total</p>
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

const Container = styled.div`
    max-width: 300px;
    margin: 0 auto;
    background: white;
    margin-top: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(0, 0, 0, 0.05);
}
`;

const PagesList = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10px, 1fr));
    grid-gap: 10px;
    justify-items: center;
    padding: 0;
    & li {
        list-style: none;
    }
`;


export default Pagination;
