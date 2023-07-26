import './App.scss';
import Navbar from './views/Navbar/Navbar';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './views/Home/Home';
import Users from './views/Users/Users';
import Config from './views/Config/Config';
import About from './views/About/About';

function App() {
  return (
    <div className="flex flex-col h-full w-full md:flex-row">
      <Navbar />
      <AnimatePresence mode='wait'>
        <Routes>
          <Route path="/" element={<Navigate to="/home/stats" />} />
          <Route path="/home/*" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/config" element={<Config />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
