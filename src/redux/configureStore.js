import { configureStore } from '@reduxjs/toolkit';
import BookReducer from './books/books';
import CategoriesReducer from './categories/categories';

const store = configureStore({
  reducer: {
    books: BookReducer,
    categories: CategoriesReducer,
  },
});

export default store;
