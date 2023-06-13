import React from "react";
import "../styles/App.css";
import Welcome from "./Welcome";

const App = () => {
  const studentName = "John Doe";

  return (
    <div>
      {/* <h1>Welcome Page</h1> */}
      <Welcome name={studentName} />
    </div>
  );
};

export default App;
