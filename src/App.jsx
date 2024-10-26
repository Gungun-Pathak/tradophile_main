import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Team from "./components/Team";
import Events from "./components/Events";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Bootcamp from "./components/Bootcamp";
import Login from "./components/Login"; // Import the Login component
import AdminPanel from "./components/AdminPanel"; // Import the AdminPanel component
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import BlogDetail from "./components/BlogDetail";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:blogId" element={<BlogDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/financebootcamp" element={<Bootcamp />} />
        <Route path="/login" element={<Login />} /> {/* Login route */}
        <Route path="/admin" element={<AdminPanel />} />{" "}
        {/* Admin panel route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
