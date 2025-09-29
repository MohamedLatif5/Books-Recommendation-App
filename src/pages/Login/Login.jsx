import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ContactForm.css";

function ContactForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    try {
      const res = await fetch(
        "http://localhost/contact-form-server/login.php",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await res.json();
      setResponse(result.message);
      if (result.redirect) {
        window.location.href = result.redirect; // Redirect user to new page
      }
    } catch (error) {
      setResponse("Error: " + error.message);
    }
  };

  return (
    <div className="login">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <i className="bx bxs-user" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className="bx bxs-lock-alt" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <button
              type="button"
              className="btn-link p-0 border-0 bg-transparent text-primary text-decoration-underline"
              onClick={() => alert("Feature coming soon!")}
            >
              Forget password?
            </button>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          <div className="register-link">
            <p>
              Don’t have an account? <Link to="/register">Register</Link>
            </p>
          </div>
          {response && <p>{response}</p>}
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
