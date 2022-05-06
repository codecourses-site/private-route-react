import React from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("auth");
    history.push("/login");
  };
  return (
    <div className="home">
      <button onClick={logout}>Log out</button>
    </div>
  );
};

export default Home;
