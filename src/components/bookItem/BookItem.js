import React from "react";
import default_img from "../../assets/img/noimg.jpeg";
import "./bookItem.scss";

const BookItem = ({ book }) => {
  const content_length = book.contents.slice(0, 80);
  const onErrorImg = (e) => {
    e.target.src = default_img;
  };
  return (
    <div className="book_item">
      <span className="img_box">
        <img
          src={book.thumbnail}
          alt={`${book.title} 썸네일이미지`}
          onError={onErrorImg}
        />
      </span>
      <div>
        <h4>{book.title}</h4>
        <ul>
          <li>{book.authors}</li>
          <li>
            {book.sale_price < 0
              ? "금액 정보가 없습니다."
              : `${book.sale_price} 원`}
          </li>
          <li>
            {content_length.length < 1
              ? "내용 정보가 없습니다."
              : `${content_length}...`}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BookItem;
