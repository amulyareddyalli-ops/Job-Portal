import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Register() {
  const [data, setData] = useState({ role: "USER" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const register = () => {
    axios.post("http://localhost:8080/auth/register", data)
  .then((res) => {
    alert("Registered Successfully");
  })
  .catch((err) => {
    console.log(err); // see real error in console
    alert(err.response?.data || "Registration Failed");
  });
  };

  return (
    <div className="auth">
      <h2>Register</h2>

      <input name="name" placeholder="Name" onChange={handleChange}/>
      <input name="email" placeholder="Email" onChange={handleChange}/>
      <input name="password" type="password" placeholder="Password" onChange={handleChange}/>

      <button onClick={register}>Register</button>

      <p>Already have account? <Link to="/">Login</Link></p>
    </div>
  );
}