import { useState, useEffect } from "react";
import React from "react";
import '../../styles/forms.css'
import { Link, useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ message, setMessage ] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let timeoutId;

    if (message) {
      timeoutId = setTimeout(() => {
        setMessage("");
      }, 3000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [ message ]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(process.env.BACKEND_URL + "/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // console.log("User created");
        // setMessage("User created successfully!");

        // Auto login after successful registration
        loginAfterSignUp(email, password);
      } else {
        console.error("Error creating user");
        if (response.status === 400) {
          setMessage(data.error);
        } else {
          setMessage("There was an error creating the user. Please try again.");
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Function to handle automatic login after successful registration
  const loginAfterSignUp = async (email, password) => {
    try {
      const loginUser = {
        email: email,
        password: password,
      };

      const response = await fetch(process.env.BACKEND_URL + "/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginUser),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        const email = data.email;
        const name = data.name;
        localStorage.setItem("miTokenJWT", token);
        localStorage.setItem("loggedUserEmail", email);
        localStorage.setItem("loggedUserName", name);

        // Redireccionar después de mostrar el mensaje por 3 segundos
        setMessage("User created successfully!");
        setTimeout(() => {
          navigate("/selection");
        }, 3000);
      } else {
        console.error("Error logging in after registration");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="signup-body">
      <div className="form-container">
        <h2 className="form-title">WELCOME TO EXPLORE</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {message && (
            <div className="alert alert-success" role="alert">
              {message}
            </div>
          )}
          <button type="submit" className="btn-form btn-primary">
            Sign Up
          </button>
          <Link to="/login" className="form-label">
            Already registered?
          </Link>
        </form>
      </div>
    </div>
  );
};