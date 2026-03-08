import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import './fonts.css';

import Works from './pages/Works';
import Contact from './pages/Contact';

function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Works />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
