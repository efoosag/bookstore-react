/* eslint-disable react/prop-types */
import React from 'react';

function Book({ bookItem }) {
  const { categories, title, author } = bookItem;
  return (
    <>
      <div>
        <span>{categories}</span>
        <h3>{title}</h3>
        <span>{author}</span>
        <div>
          <button type="button">Comments</button>
          <button type="button">Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div>
        <div>Progressive bar</div>
        <div>
          <div>Percentage</div>
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
