const ADD_BOOK = 'book/add book';
const REMOVE_BOOK = 'book/remove book';
const GET_BOOKS = 'book/get books';

const books = [
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

const initialState = {
  books,
};

export const getBooks = () => ({
  type: GET_BOOKS,
  books,
});

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case (GET_BOOKS):
      return action.books;
    case (ADD_BOOK):
      return [
        ...state,
        action.book,
      ];
    case (REMOVE_BOOK):
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default BookReducer;
