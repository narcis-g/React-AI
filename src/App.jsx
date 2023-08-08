import React from "react";
import Header from "./components/Header";
import Demo from "./components/Content";
import "./App.css";

const App = () => {
  return (
    <main>
      {/*background style*/}
      <div className="main">
        <div className="gradient"></div>
      </div>

      <div className="app">
        <Header></Header>
        <Content></Content>
      </div>
    </main>
  );
};

export default App;
