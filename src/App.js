import React, { useEffect, useState } from "react";
import BookSearch from "./components/BookSearch";
import { bookSearch } from "./KakaoApi";

const App = () => {
  const [books, setBooks] = useState([]); // 책 리스트 state 기본값 설정
  const [queryText, setQueryText] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    if (queryText.length > 0) {
      kakaoSearch(queryText, true); // 컴포넌트 마운트 후에, 함수를 호출한다.
    }
  }, [queryText]);

  const kakaoSearch = async (query, reset) => {
    const params = {
      query: query,
      sort: "accuracy", // accuracy | recency 정확도 or 최신
      page: 1, // 페이지번호
      size: 10, // 한 페이지에 보여 질 문서의 개수
    };
    const { data } = await bookSearch(params); // api 호출
    if (reset) {
      setBooks(data.documents);
      console.log(data.documents);
    } else {
      setBooks(books.concat(data.documents));
    }
  };
  const searchBook = (text) => {
    setQueryText(text);
  };

  return (
    <div>
      <BookSearch
        books={books}
        text={text}
        searchBook={searchBook}
        setText={setText}
      />
    </div>
  );
};

export default App;
