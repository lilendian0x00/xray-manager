import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Components/Home/Home';
import Users from './Components/Users/Users';
import Config from './Components/Config/Config';
import About from './Components/About/About';

function App() {
  return (
    <div className="">
      <Navbar />
      <AnimatePresence mode='wait'>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/config" element={<Config />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
