/**
 * Created by Administrator on 2018/7/18.
 */
import React, {Component} from 'react'
import Books from './Books'

class BookShelf extends React.Component {

    render() {
        const {books ,bookshelfName,updateBook } = this.props ;
        return (

                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">{bookshelfName}</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                    {books.map((book) => <li key={book.id}>
                                        <Books book={book}
                                                updateBook={updateBook}
                                        /></li>)
                                    }
                            </ol>
                        </div>
                    </div>
                </div>

        )
    }
}

export default BookShelf