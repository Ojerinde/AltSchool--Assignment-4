import { ErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import SideBar from "./Components/SideBar/SideBar";
import Calculator from "./Components/Calculator/Calculator";
import History from "./Components/History/History";

import "./App.scss";

// Error fallback component
const ErrorFallback = (props) => {
  return (
    <div role="alert" className="error">
      <p>Something went wrong!</p>
      <pre>{props.error.message}</pre>
      <button onClick={props.resetErrorBoundary}>Try again</button>
    </div>
  );
};

const App = () => {
  const [history, setHistory] = useState([]);

  // To go back home if the error boundary catch an error
  const navigate = useNavigate();

  // Get expression from calculator component
  const getDataHandler = (data) => {
    // If history length is 20, remove the 20th history and add the recent one.
    if (history.length === 5) {
      setHistory((prev) => {
        const newState = [...prev]
        newState.pop()
        newState.unshift(data)
        return newState
      })
    } else {
      setHistory((prev) => {
        const newState = [...prev];
        newState.unshift(data);
        return newState;
      });
    }
  };

  // A state to manage switching between pages
  const [page, setPage] = useState(0);

  // Page switching handler 0 for calculator, 1 for history
  const getPageHandler = (page) => {
    setPage(page);
  };

  return (
    <div className="app">
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          navigate("/");
        }}
      >
        <SideBar onSwitch={getPageHandler} page={page} />
        {page === 0 ? (
          <Calculator getData={getDataHandler} />
        ) : (
          <History history={history} />
        )}
      </ErrorBoundary>
    </div>
  );
};
export default App;
