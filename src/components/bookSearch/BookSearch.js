import BookItem from "../bookItem/BookItem";
import "./bookSearch.scss";
const BookSearch = ({ books, text, searchBook, setText, listUpdate }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    searchBook(text);
  };
  return (
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
      <div className="basket">
        <span className="toggle_btn">열기</span>
      </div>
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
