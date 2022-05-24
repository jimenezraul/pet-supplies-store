import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className='bg-blue-50 min-h-screen flex flex-col justify-between'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
