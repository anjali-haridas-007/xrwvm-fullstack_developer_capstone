import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const register = async (e) => {
    e.preventDefault();

    const register_url = window.location.origin + "/djangoapp/register";

    const data = {
      userName: userName,
      password: password,
      firstName: firstName,
      lastName: lastName,
      email: email,
    };

    const res = await fetch(register_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const json = await res.json();

    if (json.status === "Authenticated") {
      sessionStorage.setItem("username", json.userName);
      window.location.href = window.location.origin;
    } else {
      alert(json.error);
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>

      <form onSubmit={register}>
        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
