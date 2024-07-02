import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home";
import reportWebVitals from "./reportWebVitals";

//Below is CSS Files
import "semantic-ui-css/semantic.min.css"; //Overrides All Semantic UI
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
