import React from 'react'
import {Link} from 'react-router-dom'
import BookShelf from './BookShelf'

const BOOK_SHELF = {
    "CURRENT_READING": "currentlyReading",
    "READ": "read",
    "WANT_TO_READ": "wantToRead",
}

class BookList extends React.Component{
    getBookFromShelf(books, bookshelf) {
        return books.filter((book) => book.shelf === bookshelf);
    }

    render(){
        const {books , updateBook}= this.props;
        if(!books) return null;
        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                <BookShelf
                    books={this.getBookFromShelf(books,BOOK_SHELF.CURRENT_READING)}
                    updateBook = {updateBook}
                    bookshelfName = 'Current Reading'
                />
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default BookList


