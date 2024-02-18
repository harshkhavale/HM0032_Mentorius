import Navbar from "./components/Navbar";
import "./index.css";
import Main from "./pages/Main";
import { Toaster } from "react-hot-toast";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NotFound from "./pages/NotFound";
import User from "./pages/User";
import { useSelector } from "react-redux";
import Auth from "./pages/Auth";
import Footer from "./components/Footer";
import MentorProfile from "./pages/MentorProfile";
import Mentor from "./pages/Mentor";

function App() {
  const user = useSelector((state) => state.user.user);

  return (
    <div className="App  overflow-x-hidden">
      <Toaster position="top-center" reverseOrder={false} />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/*" element={<NotFound />} />

          <Route
            path="/userdashboard"
            element={user ? <User /> : <Navigate to="/auth/login" />}
          />
          <Route
            path="/mentordashboard"
            element={user ? <Mentor /> : <Navigate to="/auth/login" />}
          />
          <Route path="/auth/:parameter" element={<Auth />} />
          <Route path="/mentor/:id" element={<MentorProfile />} />

          {/* <Route
            path="/payment"
            element={user ? <Payment /> : <Navigate to="/auth/login" />}
          /> */}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
