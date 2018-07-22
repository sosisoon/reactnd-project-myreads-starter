import React from 'react'
import  {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

import SearchBook from "./components/SearchBook";
import BookList from "./components/BookList";

class BooksApp extends React.Component {
  state = {
  books:[]
  };

    componentDidMount(){
      BooksAPI.getAll().then((books) =>{
          this.setState({books:books});
      })
        console.log(this.state.books[0]);
}
  updateBook(bookToUpdate){
      const { books } = this.state;
      let haveBook = false;

      let updatedBooks = books.map((book) => {
          if (book.id === bookToUpdate.id) {
              haveBook = true;
              return bookToUpdate;
          } else {
              return book;
          }
      });

      if(!haveBook){
          updatedBooks.push(bookToUpdate);
      }

      BooksAPI.update(bookToUpdate, bookToUpdate.shelf).then(
          this.setState({ books: updatedBooks })
      );
  }

  render() {
      const {books ,updateBook} = this.state;
    return (
      <div className="app">
        <Route path="/search"
                render={()=> (<SearchBook/>)}
        />
        <Route exact path="/"
                render={() =>(<BookList
                books={books}
                updateBook={updateBook}
                />)}
        />
      </div>
    )
  }
}

export default BooksApp
