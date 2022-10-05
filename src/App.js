// import { ErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import SideBar from "./Components/SideBar/SideBar";
import Calculator from "./Components/Calculator/Calculator";
import History from "./Components/History/History";

import "./App.scss";

// Error fallback component
// const ErrorFallback = (props) => {
//   return (
//     <div role="alert" className="error">
//       <p>Something went wrong!</p>
//       <pre>{props.error.message}</pre>
//       <button onClick={props.resetErrorBoundary}>Try again</button>
//     </div>
//   );
// };

const App = () => {
  const [history, setHistory] = useState([]);

  // To go back home if an error occurs
  const navigate = useNavigate();

  // Get expression from calculator component
  const getDataHandler = (data) => {
    // Max history length is 20
    if (history.length === 20) return;
    setHistory((prev) => [...prev, data]);
  };

  // Switch between pages
  const [page, setPage] = useState(0);

  const getPageHandler = (page) => {
    setPage(page);
  };

  return (
    <div className="app">
      {/* <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          navigate("/");
        }}
      > */}
      <SideBar onSwitch={getPageHandler} />
        {page === 0 ? (
          <Calculator getData={getDataHandler} />
        ) : (
          <History history={history} />
        )}

      {/* </ErrorBoundary> */}
    </div>
  );
};
export default App;
