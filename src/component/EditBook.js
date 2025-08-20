import React from 'react'
import BookService from '../service/BookService';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';


function EditBook() {

  const service =  BookService();
  const [book, setBook] = React.useState({});
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(() => {
        service.getBookById(id)
            .then(response => {
                setBook(response.data);
            });

    }, []);
    const changeData = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        });
    }
    const submitData = (e) => {
        e.preventDefault(); 
        service.editBook(book);
        navigate('/getAllBooks');
    }

  return (
    <div>
        <h1>Edit Book</h1>
        <form>
        
            <div className="form-group">
                <label>Book Id</label>
                <input type="text" name="bookId" value={book.bookId} 
                  placeholder="Enter book id"  className='form-control' readOnly />
            </div>
            <div className="form-group">
                <label>Book Title</label>
                <input type="text" name="title" value={book.title} 
                  placeholder="Enter book title" onChange={changeData} className='form-control' />
            </div>
            <div className="form-group">
                <label>Book author</label>
                <input type="text" name="author" value={book.author} 
                  placeholder="Enter book author" onChange={changeData} className='form-control' />
            </div><div className="form-group">
                <label>Book publisher</label>
                <input type="text" name="publisher" value={book.publisher} 
                  placeholder="Enter book publisher" onChange={changeData} className='form-control' />
            </div><div className="form-group">
                <label>Book price</label>
                <input type="text" name="price" value={book.price} 
                  placeholder="Enter book price" onChange={changeData} className='form-control' />
            </div>
        </form>
        <button type="submit" className="btn btn-primary" onClick={submitData}>Update Book</button>
        <Link to="/getallbooks" className='btn btn-danger'>cancel</Link>
    </div>
  )
}

export default EditBook