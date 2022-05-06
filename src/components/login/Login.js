import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const history = useHistory();

  useEffect(() => {
    const authedUser = JSON.parse(localStorage.getItem("auth"));
    if (authedUser) {
      history.push("/");
    }
  }, [history]);

  const login = () => {
    const { email, password } = getInputs();
    if (isUserCredentialsValid(email, password)) {
      saveAuthedInfo({ email, password });
      history.push("/");
    } else {
      window.alert(`Your user's name or password is not correct`);
    }
  };

  const getInputs = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    return { email, password };
  };

  const isUserCredentialsValid = (email, password) => {
    return email === "admin@codecourses.site" && password === "123456";
  };

  const saveAuthedInfo = (user) => {
    localStorage.setItem("auth", JSON.stringify(user));
  };

  return (
    <div className="login__container">
      <div className="login__welcome">
        <p>
          Build{" "}
          <span style={{ color: "#0B65C2", fontWeight: "bold" }}>
            Private Route
          </span>{" "}
          with React
        </p>
      </div>
      <div className="login__form-container">
        <div className="login__form">
          <input
            type="text"
            placeholder="Email or phone number"
            ref={emailRef}
          />
          <input type="password" placeholder="Password" ref={passwordRef} />
          <button className="login__submit-btn" onClick={login}>
            Login
          </button>
          <span className="login__forgot-password">Forgot password?</span>
          <span className="login__signup">Create New Account</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
