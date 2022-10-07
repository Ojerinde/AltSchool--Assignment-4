import { useState } from "react";
import "./History.scss";

const HISTORY_PER_PAGE = 4;

const History = ({ history }) => {
  // Pagination state
  const [page, setPage] = useState(1);

  const totalHistory = history.length;
  const totalPages = Math.ceil(totalHistory / HISTORY_PER_PAGE);
  const start = (page - 1) * HISTORY_PER_PAGE;
  const end = start + HISTORY_PER_PAGE;

  return (
    <div className="history">
      <div>
        <h1 className="history__title">History</h1>
        <ul className="history__list">
          {history.slice(start, end).map((item, index) => (
            <li key={index}>
               {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="history__btns">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((item) => (
          <button key={item} onClick={(e) => setPage(item)}>{item}</button>
        ))}
      </div>
    </div>
  );
};
export default History;
