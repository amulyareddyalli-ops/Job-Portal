import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./assets/component/Login";
import Register from "./assets/component/Register";
import Home from "./assets/component/Home";
import Jobs from "./assets/pages/Jobs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
