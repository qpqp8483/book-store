import React, { useEffect, useState } from "react";
import BookItem from "../bookItem/BookItem";
import "./bookSearch.scss";
const BookSearch = ({ books, text, searchBook, setText, listUpdate }) => {
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
        {listUpdate ? (
          <span>찾으시는 도서를 검색해주세요.</span>
        ) : books.length < 1 ? (
          <span>검색 결과가 존재하지 않습니다.</span>
        ) : (
          books.map((book, index) => <BookItem book={book} key={index} />)
        )}
      </div>
    </div>
  );
};

export default BookSearch;
