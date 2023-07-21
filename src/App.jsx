import './App.scss';
import { useLocation } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="">
      <Navbar />
      <AnimatePresence mode='wait'>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
