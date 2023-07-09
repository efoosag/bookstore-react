/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBook } from '../redux/books/booksSlice';
import 'react-circular-progressbar/dist/styles.css';
import './Book.css';

function Book({ bookItem }) {
  const dispatch = useDispatch();
  const {
    id, category, title, author,
  } = bookItem;
  const percentage = 66;
  return (
    <>
      <div className="display-Panel">
        <div className="book-details">
          <span className="category">{category}</span>
          <h3 className="title">{title}</h3>
          <span className="author">{author}</span>
          <div className="book-buttons">
            <button type="button" className="btn comment">Comments</button>
            <span className="btn-divider">|</span>
            <button type="button" className="btn remove" onClick={() => dispatch(removeBook(id))}>Remove</button>
            <span className="btn-divider">|</span>
            <button type="button" className="btn edit">Edit</button>
          </div>
        </div>
        <div className="progress">
          <div className="circular-progressbar">
            <CircularProgressbar className="progresBar" value={percentage} />
          </div>
          <div>
            <div className="percentage">{`${percentage}%`}</div>
            <div className="percentage-completed">completed</div>
          </div>
        </div>
        <span className="more-details-divider">|</span>
        <div className="more-details">
          <span className="current-chapter">Current chapter</span>
          <span className="chapter-number">CHAPTER 17</span>
          <button type="button" className="chapter-button">Update Progress</button>
        </div>

      </div>

    </>
  );
}

export default Book;
