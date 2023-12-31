import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

function InputForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const clear = () => {
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  const submitBook = (e) => {
    e.preventDefault();
    if (title !== '' && author !== '' && category !== '') {
      dispatch(addBook({
        id: String(uuidv4()),
        title,
        author,
        category,
      }));
    }
    clear();
  };

  return (
    <div className="form-container">
      <div className="form-title">
        <h2> ADD NEW BOOK</h2>
      </div>

      <form>
        <input type="text" value={title} className="input" onChange={(e) => setTitle(e.target.value)} name="title" placeholder="Title" />
        <input type="text" value={author} className="input" onChange={(e) => setAuthor(e.target.value)} name="author" placeholder="Author" />
        <input type="text" value={category} className="input" onChange={(e) => setCategory(e.target.value)} name="category" placeholder="Category" />
        <input type="submit" className="add-book" onClick={submitBook} />
      </form>

    </div>
  );
}

export default InputForm;
