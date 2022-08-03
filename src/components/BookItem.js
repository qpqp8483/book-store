import React from "react";

const BookItem = ({ book }) => {
  const content_length = book.contents.slice(0, 80);
  return (
    <div>
      <span>
        <img src={book.thumbnail} alt={`${book.title} 썸네일이미지`} />
      </span>
      <h4>{book.title}</h4>
      <ul>
        <li>{book.authors}</li>
        <li>{`${book.sale_price} 원`}</li>
        <li>{`${content_length}...`}</li>
      </ul>
    </div>
  );
};

export default BookItem;
