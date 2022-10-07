import { RiHistoryLine } from "react-icons/ri";
import { BsCalculatorFill } from "react-icons/bs";

import "./SideBar.scss";
const SideBar = ({ onSwitch, page }) => {
  // set page to calculator page
  const pageHandler = (num) => {
    onSwitch(num);
  };

  return (
    <div className="sidebar">
      <BsCalculatorFill
        className={`${page === 0 ? "active" : ""} icon`}
        onClick={pageHandler.bind(null, 0)}
      />
      <RiHistoryLine
        className={`${page === 1 ? "active" : ""} icon`}
        onClick={pageHandler.bind(null, 1)}
      />
    </div>
  );
};
export default SideBar;
