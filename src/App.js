import "./App.css";
import "semantic-ui-css/semantic.min.css";
/* Pages*/
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      {}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/" element={<Menu />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

//This is the example page that the react project started with
