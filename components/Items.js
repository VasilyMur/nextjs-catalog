import React from 'react'
import Link from 'next/link'


class Items extends React.Component {
    render() {

        return (
            <React.Fragment>
                <h1>All Items</h1>
                <ul>
                    {this.props.items.map((movie, i) => {
                        //return <li key={i}><Link  as={`/items/${movie.show.name}`} href={`/item?name=${movie.show.name}`}><a>{movie.show.name}</a></Link></li>
                        return <li key={i}><Link  as={`/items/${movie.show.name}`} href={ {pathname: '/item', query: {id: movie.show.name}} }><a>{movie.show.name}</a></Link></li>
                    })}
                </ul>
            </React.Fragment>
        )
    }
}

export default Items