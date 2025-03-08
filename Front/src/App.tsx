import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login';
import AboutPage from './pages/About';
import Objectif from "./pages/Objectif";
import Dashboard from "./pages/Dashboard";
import ChatBotIA from "./pages/ChatBot";
import Question1 from './pages/Question1';
import Question2 from './pages/Question2';
import AnimatedPage from './components/Animated'; // le composant animé
import "@fontsource/island-moments";
import "@fontsource/roboto-flex";
import '@fontsource/poppins';
import SignIn from './pages/Signin';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <AnimatedPage>
              <Login />
            </AnimatedPage>
          }
        />
        <Route
          path="/signIn"
          element={
            <AnimatedPage>
              <SignIn />
            </AnimatedPage>
          }
        />
        <Route
          path="/"
          element={
            <AnimatedPage>
              <AboutPage />
            </AnimatedPage>
          }
        />
        <Route
          path="/objectif"
          element={
            <AnimatedPage>
              <Objectif />
            </AnimatedPage>
          }
        />
        <Route
          path="/question1"
          element={
            <AnimatedPage>
              <Question1 />
            </AnimatedPage>
          }
        />
        <Route
          path="/question2"
          element={
            <AnimatedPage>
              <Question2 />
            </AnimatedPage>
          }
        />
        <Route
          path="/dashboard"
          element={
            <AnimatedPage>
              <Dashboard />
            </AnimatedPage>
          }
        />
        <Route
          path="/chatBotIa"
          element={
            <AnimatedPage>
              <ChatBotIA />
            </AnimatedPage>
          }
        />
      </Routes>
    </Router>
  );
}

export default App
