import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zelh2Qhasjgvb59w91ic/books';

export const fetchBooks = createAsyncThunk(
  'books/getBooks',
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

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`${url}/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

export const addBook = createAsyncThunk(
  'books/addBook',
  async (book) => {
    try {
      await axios({
        method: 'post',
        url,
        data: {
          item_id: book.id, title: book.title, author: book.author, category: book.category,
        },
      });
      return book;
    } catch (error) {
      return error;
    }
  },
);

const initialState = {
  books: [],
  isLoading: true,
};

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
