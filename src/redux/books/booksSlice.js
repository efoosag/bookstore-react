import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zelh2Qhasjgvb59w91ic/books';

export const fetchBooks = createAsyncThunk(
  'cart/getCartItems',
  async (thunkAPI) => {
    try {
      const resp = await axios(url);
      const entries = Object.entries(resp.data);
      const books = entries.map((element) => ({
        id: element[0],
        title: Object.assign(...element[1]).title,
        author: Object.assign(...element[1]).author,
        category: Object.assign(...element[1]).category,
      }));
      return books;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

// const ADD_BOOK = 'book/add book';
// const REMOVE_BOOK = 'book/remove book';
// const GET_BOOKS = 'book/get books';

// const books = [
//   {
//     id: 1, title: 'Urban Fisherman', author: 'James Washington', categories: 'Action',
//   },
//   {
//     id: 2, title: 'Thing Fall Apart', author: 'Okonkwo Chidi', categories: 'Drama',
//   },
//   {
//     id: 3, title: 'Avatar', author: 'James Washington', categories: 'Sci-Fiction',
//   },
//   {
//     id: 4, title: 'beauty and the Beast', author: 'Stanley Young', categories: 'Romance',
//   },
// ];

const initialState = {
  books: [],
  isLoading: true,
};

// export const getBooks = () => ({
//   type: GET_BOOKS,
//   books,
// });

// export const addBook = (book) => ({
//   type: ADD_BOOK,
//   book,
// });

// export const removeBook = (id) => ({
//   type: REMOVE_BOOK,
//   id,
// });

// const BookReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case (GET_BOOKS):
//       return action.books;
//     case (ADD_BOOK):
//       return [
//         ...state,
//         action.book,
//       ];
//     case (REMOVE_BOOK):
//       return state.filter((book) => book.id !== action.id);
//     default:
//       return state;
//   }
// };

// export default BookReducer;

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBooks.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    },
    [fetchBooks.rejected]: (state) => {
      state.isLoading = false;
    },
  },

});

export default booksSlice.reducer;
