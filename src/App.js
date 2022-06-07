import Home from "./Pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import Results from "./Pages/Results";

function App() {
  const [srch, setSrch] = useState("");
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Navigate replace to="/google-clone/home" />}
        />
        <Route
          path="/google-clone/home"
          element={<Home srch={srch} setSrch={setSrch} />}
        />
        <Route
          path="/google-clone/results"
          element={<Results srch={srch} setSrch={setSrch} />}
        />
        <Route path="*" element={<div>Wrong Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
