import "./App.css";
import Nav from "./Components/Nav.jsx";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route
            path="books/1"
            element={
              <BookInfo books={books} /*addToCart={addToCart} cart={cart}*/ />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
