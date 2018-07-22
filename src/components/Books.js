/**
 * Created by Administrator on 2018/7/18.
 */
import * as BooksAPI from "../BooksAPI"
import React ,{Component}from 'react'

class Books extends React.Component{

    render(){
        return(
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{width:183,height:190,backgroundImage: 'url()'}}></div>
                            <div className="book-shelf-changer">
                                <select>
                                    <option value="move" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select>
                            </div>
                        </div>
                        <div className="book-title">To Kill a Mockingbird</div>
                        <div className="book-authors">Harper Lee</div>
                    </div>
        )
    }
}

export default Books
