import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import BusinessSummary from './pages/BusinessSummary/BusinessSummary';
import Home from './pages/Home/Home';
import Reviews from './pages/Reviews/Reviews';
import Tools from './pages/Tools/Tools';

function App() {
  return (
    <>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/businesssummary" element={<BusinessSummary />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </Navbar>

    </>
  );
}

export default App;
