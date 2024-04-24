import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Admin from "./pages/admin/admin";
import NotePage from "./pages/adminPage";
import Header from "./component/header";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Header />} />

          <Route path="/home" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/note/:id" element={<NotePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
