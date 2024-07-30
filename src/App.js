import "./App.css";
import "semantic-ui-css/semantic.min.css";
/* Pages*/
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Menu" element={<Menu />} />

          {/* If the route typed in doesn't match any of the routes above then it reroutes to the Home page "/" */}
          <Route exact path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

//This is the example page that the react project started with
