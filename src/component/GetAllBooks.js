import React, { useEffect } from 'react'

import BookService from '../service/BookService';
import { Link,useNavigate } from 'react-router-dom';

function GetAllBooks() {
  const [books, setBooks] = React.useState([]);
  const service = new BookService();
  const navigate = useNavigate();

  useEffect(() => {
    GetBooks();
  }, []);

  const GetBooks = () => {
    
    service.getBooks()
      .then(response => {
        setBooks(response.data);
      });
  };

  const deleteBook = (event,bookId) => {

    event.preventDefault();
    service.deleteBook(bookId);
    navigate(0);
  };

  return (
    <div className='container'>
      <h1>Book information</h1>
      <table className='table table-striped'>

        <thead>
          <th>Book ID</th>
          <th>Book Name</th>
          <th>Author</th> 
          <th>Publisher</th>
          <th>Price</th>
        </thead>
        <tbody>
          {
            books.map((book) => (
              <tr key={book.bookId}>
                <td>{book.bookId}</td>
                <td>{book.title}</td>   
                <td>{book.author}</td>
                <td>{book.publisher}</td>
                <td>{book.price}</td>
                <td><button className='btn btn-danger' onClick={(event)=>deleteBook(event,book.bookId)}>Delete</button></td>
                <Link to={`/editbook/${book.bookId}`} className='btn btn-success'>Edit</Link>
              </tr>
            ))
          }
        </tbody>

        </table>
          <Link to="/addbooks" className='btn btn-primary'>Add Book</Link>
    </div>
  )
}

export default GetAllBooks


// "bookId": 9,
//     "title": "abc",
//     "author": "acn",
//     "publisher": "kjadnf",
//     "price": 89