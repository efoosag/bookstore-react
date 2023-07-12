import { configureStore } from '@reduxjs/toolkit';
import BooksReducer from './books/booksSlice';
import CategoriesReducer from './categories/categories';

const store = configureStore({
  reducer: {
    books: BooksReducer,
    categories: CategoriesReducer,
  },
});

export default store;
