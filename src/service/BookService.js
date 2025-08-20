import axios from 'axios';
import React from 'react'


const BOOK_URI = "http://localhost:8383/library/book";


function BookService() {
    const getBooks = () =>{
        return  axios.get(BOOK_URI);
    };

    const addBook = (book) => {
        return axios.post(BOOK_URI, book);
    };

    const deleteBook = (bookId) => {
        return axios.delete(BOOK_URI+`/${bookId}`);
    }

    const getBookById = (bookId) => {
        return axios.get(BOOK_URI+"/byid"+`/${bookId}`);
    }
    const editBook = ( book) => {
        return axios.put(BOOK_URI, book);
    }    


  return Object.freeze({
    getBooks,
    addBook,
    deleteBook,
    getBookById,
    editBook
  }); 
}

export default BookService