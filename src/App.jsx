import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Categories from "./pages/Categories";
import Profile from "./pages/Profile";
import AnswerReview from "./pages/AnswerReview";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/quiz/:category" element={<Quiz />} />

      <Route path="/result" element={<Result />} />

      <Route path="/categories" element={<Categories />} />

      <Route path="/profile" element={<Profile />} />

      <Route
        path="/answer-review"
        element={<AnswerReview />}
      />

    </Routes>
  );
}

export default App;