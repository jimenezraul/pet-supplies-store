import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Store from "./pages/Store";
import LogIn from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import SignUp from "./pages/Signup"

function App() {
  return (
    <Router>
      <div className="bg-blue-50 min-h-screen flex flex-col justify-between">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/store/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
