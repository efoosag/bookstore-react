/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBook } from '../redux/books/books';
import 'react-circular-progressbar/dist/styles.css';
import './Book.css';

function Book({ bookItem }) {
  const dispatch = useDispatch();
  const {
    id, categories, title, author,
  } = bookItem;
  const percentage = 66;
  return (
    <>
      <div>
        <span>{categories}</span>
        <h3>{title}</h3>
        <span>{author}</span>
        <div>
          <button type="button">Comments</button>
          <button type="button" onClick={() => dispatch(removeBook(id))}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div>
        <div className="circular-progressbar">
          <CircularProgressbar className="progresBar" value={percentage} />
        </div>
        <div>
          <div>{`${percentage}%`}</div>
          <div>completed</div>
        </div>
      </div>
      <div>
        <span>Current chapter</span>
        <span>CHAPTER 17</span>
        <button type="button">Update Progress</button>
      </div>
    </>
  );
}

export default Book;
