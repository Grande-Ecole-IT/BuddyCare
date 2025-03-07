import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login';
import AboutPage from './pages/About';
import "@fontsource/island-moments";
import "@fontsource/roboto-flex"; 
import '@fontsource/poppins';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/homePage" element={<Login />} />
        <Route path="/" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App
