import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const nav = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/auth/login", data)
      .then((res) => {
        if (res.data) {
          localStorage.setItem("user", JSON.stringify(res.data));
          nav("/");
        } else {
          alert("Invalid credentials");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Server error");
      });
  };

  return (
    <div className="auth">
      <h2>Login</h2>

      <form onSubmit={login}>
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>
      </form>

      <p>
        New user? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}
