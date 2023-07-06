import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import InputForm from './InputForm';
import { getBooks } from '../redux/books/books';

const Books = () => {
  const bookItems = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <>
      <div>
        {Array.isArray(bookItems) ? bookItems.map((bookItem) => (<Book key={bookItem.id} bookItem={bookItem} />)) : 'Not Array'}
      </div>
      <div>
        <InputForm />
      </div>
    </>
  );
};

export default Books;
