import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login';
import AboutPage from './pages/About';
import Objectif from "./pages/Objectif";
import "@fontsource/island-moments";
import "@fontsource/roboto-flex";
import '@fontsource/poppins';
import Question1 from './pages/Question1';
import Question2 from './pages/Question2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/homePage" element={<Login />} />
        <Route path="/" element={<AboutPage />} />
        <Route path="/objectif" element={<Objectif />} />
        <Route path="/question1" element={<Question1 />} />
        <Route path="/question2" element={<Question2 />} />
      </Routes>
    </Router>
  );
}

export default App
