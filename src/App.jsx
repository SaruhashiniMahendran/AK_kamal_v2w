import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/calendar" element={<div>Calendar Page</div>} />
          <Route path="/order" element={<div>Order Page</div>} />
          <Route path="/finance" element={<div>Finance Page</div>} />
          <Route path="/alerts" element={<div>Alerts Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
