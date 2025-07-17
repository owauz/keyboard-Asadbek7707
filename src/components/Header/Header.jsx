import { useState } from "react";
import book from "../../../public/assets/book.svg";
import line from "../../../public/assets/line.svg";
import moon from "../../../public/assets/moon.svg";

import "./Header.scss";

export default function Header() {
  const [end, setEnd] = useState(false);
  return (
    <div className="nav">
      <img src={book} alt="" />
      <div className="item">
        <div className="item-select">
          <h4>Sans Serif</h4>
          <img src={line} alt="" />
        </div>
        <div className="mode">
          <div
            onClick={() => setEnd(!end)}
            className={`item ${end ? "end" : ""}`}
          >
            <div className="circle"></div>
          </div>
          <img src={moon} alt="" />
        </div>
      </div>
    </div>
  );
}
