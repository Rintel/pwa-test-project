import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import logo from "./logo.svg";
import Home from "./components/Home";
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
