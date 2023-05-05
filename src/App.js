import "./App.css";
import { Button, TextField, Typography } from "@mui/material";
import Navbar from "./components/Navbar";
import Statebasics from "./components/Statebasics";
import Array from "./components/Array";
import { Route, Routes } from "react-router-dom";
import Newform from "./components/Newform";
import ViewData from "./components/ViewData";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Statebasics />
      <Array/> */}
      <Routes>
        <Route path="/" element={<Statebasics />} />
        <Route path="/table" element={<Array />} />
        <Route path="/form" element={<Newform />} />
        <Route path="/view" element={<ViewData />} />
      </Routes>
    </div>
  );
}

export default App;
