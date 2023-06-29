import React from 'react';

function InputForm() {
  return (
    <form>

      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="author" placeholder="Author" />
      <input type="text" name="category" placeholder="Category" />
      <input type="submit" />

    </form>
  );
}

export default InputForm;
