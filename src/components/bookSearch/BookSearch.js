import React from "react";
import BookItem from "../bookItem/BookItem";
import "./bookSearch.scss";
const BookSearch = ({ books, text, searchBook, setText }) => {
  return (
    <div>
      <form action="#" onSubmit={() => searchBook(text)}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => searchBook(text)}>검색</button>
      </form>
      <div className="book_list">
        {books.map((book, index) => (
          <BookItem book={book} key={index} />
        ))}
      </div>
    </div>
  );
};

export default BookSearch;
