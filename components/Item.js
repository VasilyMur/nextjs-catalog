import React from 'react'
import Link from 'next/link'
import ItemStyles from './styles/ItemStyles';

class Item extends React.Component {
    render() {
        const { item } = this.props;
        return (
            <ItemStyles>
                <h2><Link as={`/items/${item.slug}`} href={ {pathname: '/item', query: {id: item.slug}} }><a>{item.name}</a></Link></h2>
                <p>{item.location.address}</p>
                <p>Open:</p>
                <p><Link as={`/items/${item.slug}`} href={ {pathname: '/item', query: {id: item.slug}} }><a>Edit</a></Link></p>
            </ItemStyles>
        )
    }
}

export default Item