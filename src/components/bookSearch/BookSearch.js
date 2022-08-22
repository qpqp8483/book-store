import { useState } from "react";
import BookItem from "../bookItem/BookItem";
import CoinPopup from "../coinPopup/CoinPopup";
import Header from "../header/Header";
import "./bookSearch.scss";
const BookSearch = ({ books, text, searchBook, setText, listUpdate }) => {
  const [coin, setCoin] = useState("");
  const [coinSubmit, setCoinSubmit] = useState(false);
  const coinChange = (e) => {
    if (e > 1000000) {
      alert("100만원을 초과할 수 없습니다.");
      return;
    } else {
      setCoin(e);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    searchBook(text);
  };
  return (
    <div className="search_section">
      <CoinPopup coin={coin} coinChange={coinChange} />
      <div>
        <form action="#" onSubmit={handleSubmit} className="search_box">
          <div>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="검색어를 입력해주세요"
            />
            <button onClick={() => searchBook(text)}>검색</button>
          </div>
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
      <Header />
    </div>
  );
};

export default BookSearch;
