import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [studentCode, setStudentCode] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!name.trim() || !studentCode.trim()) {
      alert("Please enter your name and student code");
      return;
    }

    // Save student information
    localStorage.setItem("studentName", name.trim());
    localStorage.setItem("studentCode", studentCode.trim());

    navigate("/dashboard");
  };

  return (
    <div className="auth-page">
      <div className="auth-box">

        <div className="auth-logo">
          QuizMaster
        </div>

        <h1>Welcome Back! 👋</h1>

        <p>Enter your student details to continue.</p>

        <form onSubmit={handleLogin}>

          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter Roll Number / Student Code"
            value={studentCode}
            onChange={(e) => setStudentCode(e.target.value)}
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p className="auth-bottom">
          New Student?
          <Link to="/register"> Register</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;