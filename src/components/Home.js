import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  return (
    <div className="home-wrapper">
      <button onClick={() => history.push("/user")}>
        User
      </button>
    </div>
  );
}

export default Home;
