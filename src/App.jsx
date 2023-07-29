import './App.scss';
import Navbar from './views/Navbar/Navbar';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, Navigate } from 'react-router-dom';

import { routesMap } from './views/Routes';

function App() {
  return (
    <div className="flex flex-col h-full w-full md:flex-row">
      <Navbar />
      <AnimatePresence mode='wait'>
        <Routes>
          <Route path="/" element={<Navigate to="/home/stats" />} />
          <Route path={routesMap[0].location + "/*"} element={routesMap[0].component} />
          <Route path={routesMap[1].location} element={routesMap[1].component} />
          <Route path={routesMap[2].location} element={routesMap[2].component} />
          <Route path={routesMap[3].location} element={routesMap[3].component} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
