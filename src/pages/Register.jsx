import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {

    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    localStorage.setItem("user", name);

    alert("Registration successful!");

    navigate("/dashboard");
  };

  return (
    <div className="auth-page">

      <div className="auth-box">

        <div className="auth-logo">
          QuizMaster
        </div>

        <h1>Create Account</h1>

        <p>Join QuizMaster and start learning.</p>

        <form onSubmit={handleRegister}>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Create Account
          </button>

        </form>

        <p className="auth-bottom">
          Already have an account?
          <Link to="/"> Login</Link>
        </p>

      </div>

    </div>
  );
}

export default Register;