import "@fontsource/island-moments";
import "@fontsource/poppins";
import "@fontsource/roboto-flex";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AnimatedPage from "./components/Animated"; // le composant animé
import AboutPage from "./pages/About";
import ChatBotIA from "./pages/ChatBot";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Objectif from "./pages/Objectif";
import Question1 from "./pages/Question1";
import Question2 from "./pages/Question2";
import SignIn from "./pages/Signin";
import PrivateRoute from "./routes/PrivateRoute";
import MoodTrackr from "./pages/MoodTrackr";
import SoulScript from "./pages/SoulScript";

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
        <Route path="/question1" element={<Question1 />} />
        <Route path="/question2" element={<Question2 />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>

        {/* Autres routes protégées */}

        <Route
          path="/chatBotIa"
          element={
            <AnimatedPage>
              <ChatBotIA />
            </AnimatedPage>
          }
        />
        <Route
          path="/moodtrackr"
          element={
            <AnimatedPage>
              <MoodTrackr />
            </AnimatedPage>
          }
        />
        <Route
          path="/soulscrypt"
          element={
            <AnimatedPage>
              <SoulScript />
            </AnimatedPage>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
