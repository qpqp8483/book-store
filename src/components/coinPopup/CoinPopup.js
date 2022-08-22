import React from "react";
import "./coinPopup.scss";
const CoinPopup = ({ coin, coinChange }) => {
  const coinHandle = (e) => {
    coinChange(e.target.value);
  };
  return (
    <div className="coin_popup">
      <div>
        <p>
          충전하실 금액을 입력하여주세요 <br />
          <span>※10만원이상 초과할 수 없습니다.</span>
        </p>
        <form action="">
          <input type="number" value={coin} onChange={coinHandle} />
          <button>확인</button>
        </form>
      </div>
      <span className="overlay"></span>
    </div>
  );
};

export default CoinPopup;
