import React from 'react';
import Book from './Book';
import InputForm from './InputForm';

const bookItems = [
  {
    id: 1, title: 'Urban Fisherman', author: 'James Washington', categories: 'Action',
  },
  {
    id: 2, title: 'Thing Fall Apart', author: 'Okonkwo Chidi', categories: 'Drama',
  },
  {
    id: 3, title: 'Avatar', author: 'James Washington', categories: 'Sci-Fiction',
  },
  {
    id: 4, title: 'beauty and the Beast', author: 'Stanley Young', categories: 'Romance',
  },
];

function Books() {
  return (
    <>
      <div>
        {bookItems.map((bookItem) => (<Book key={bookItem.id} bookItem={bookItem} />))}
      </div>
      <div>
        <InputForm />
      </div>
    </>
  );
}

export default Books;
