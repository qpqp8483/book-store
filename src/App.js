import React, { useCallback, useEffect, useState } from "react";
import { bookSearch } from "./KakaoApi";

const App = () => {
  const [books, setBooks] = useState([]); // 책 리스트 state 기본값 설정
  const [queryText, setQueryText] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    if (queryText.length > 0) {
      console.log(queryText);
      kakaoSearch(queryText, true); // 컴포넌트 마운트 후에, 함수를 호출한다.
    }
  }, [queryText]);

  const kakaoSearch = async (query, reset) => {
    console.log(query);
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
    console.log(text);
    setQueryText(text);
  };

  // useEffect(() => {
  //   kakaoSearch().then((res) => {
  //     setBooks(res.data.documents); //setBooks에 res.data.documents 할당
  //     console.log(res.data.documents); //나옴
  //     console.log(books); //안나옴
  //   });
  // }, []); //의존정배열에 books넣을경우 무한루프,,,
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => searchBook(text)}>버튼</button>
      {/* {JSON.stringify(books)} */}
      {books.map((book, index) => (
        <div key={index}>
          {book.contents}
          <br />
          <br />
        </div>
      ))}
    </div>
  );
};

export default App;
