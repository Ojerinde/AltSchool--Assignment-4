import { RiHistoryLine } from "react-icons/ri";
import { BsCalculatorFill } from "react-icons/bs";

import "./SideBar.scss";
const SideBar = ({ onSwitch }) => {

  // set page to calculator page
  const homePageHandler = () => {
    onSwitch(0);
  };

  // set page to history page
  const historyPageHandler = () => {
    onSwitch(1);
  };

  return (
    <div className="sidebar">
      <BsCalculatorFill className="icon" onClick={homePageHandler} />
      <RiHistoryLine className="icon" onClick={historyPageHandler} />
    </div>
  );
};
export default SideBar;
