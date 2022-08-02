import React, { useEffect } from "react";
import { bookSearch } from "./KakaoApi";

const App = (props) => {
  useEffect(() => {
    kakaoSearch();
  }, []);

  const kakaoSearch = async () => {
    const params = {
      query: "아몬드",
      sort: "accuracy", // accuracy | recency 정확도 or 최신
      page: 1, // 페이지번호
      size: 10, // 한 페이지에 보여 질 문서의 개수
    };
    const { data } = await bookSearch(params);
    console.log(data);
  };
  return <div></div>;
};

export default App;
