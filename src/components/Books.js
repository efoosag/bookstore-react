import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import InputForm from './InputForm';
import { fetchBooks } from '../redux/books/booksSlice';

const Books = () => {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <>
      <div>
        {Array.isArray(books) ? books.map((bookItem) => (<Book key={bookItem.id} bookItem={bookItem} />)) : 'Not Array'}
      </div>
      <div>
        <InputForm />
      </div>
    </>
  );
};

export default Books;
