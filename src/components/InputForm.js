import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

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
    <form>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} name="title" placeholder="Title" />
      <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} name="author" placeholder="Author" />
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} name="category" placeholder="Category" />
      <input type="submit" onClick={submitBook} />
    </form>
  );
}

export default InputForm;
