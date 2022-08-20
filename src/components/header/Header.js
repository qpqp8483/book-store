import React from "react";
import CommonButton from "../button/CommonButton";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <span className="toggle_btn">열기</span>
      <div className="wallet">10000원</div>
      <div className="basket">
        <table>
          <caption>구매 리스트 정보</caption>
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" colspan="2">
                상품정보
              </th>
              <th scope="col">수량</th>
              <th scope="col">상품금액</th>
              <th scope="col">주문</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>
                <h5 className="title">못말리는 짱구</h5>
              </td>
              <td>
                <div className="num_box">
                  <input type="text" />
                  <div className="num_control">
                    <span>△</span>
                    <span>▽</span>
                  </div>
                </div>
              </td>
              <td>
                <p className="price">12,000원</p>
              </td>
              <td>
                <div className="basket_btn_box">
                  <CommonButton type={"positive"} text={"구매하기"} />
                  <CommonButton type={"negative"} text={"삭제"} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Header;
