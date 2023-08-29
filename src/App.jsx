import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Onboard from "./pages/Onboard";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Onboard />}></Route>
      <Route path="/landing" element={<Landing />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
}

export default App;
