import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Box } from "@mui/material";
import logo from "./logo.svg";
import "./App.css";
import Astronauts from "./pages/Astronauts/Astronauts";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Box className="app-main">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/astronauts" replace />} />
          <Route path="/astronauts" element={<Astronauts />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
