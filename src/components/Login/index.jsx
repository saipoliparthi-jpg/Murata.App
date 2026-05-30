import { useState } from "react";

const Login = ({ setUserName }) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  const loginUser = (event) => {
    event.preventDefault();

    const nameRegex = /^[A-Za-z ]+$/;

    if (name.trim().length < 3) {
      setError("Name must be at least 3 characters");
    } else if (!nameRegex.test(name)) {
      setError("Name should contain only alphabets");
    } else if (mobile.length !== 10) {
      setError("Mobile number must be 10 digits");
    } else {
      setError("");
      setUserName(name);
    }
  };

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={loginUser}>
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <p>{new Date().toLocaleString()}</p>

        {error && <p className="error">{error}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;