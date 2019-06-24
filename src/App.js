import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./components/Home";
import YaraBela from "./components/YaraBela";
import YaraMila from "./components/YaraMila";

import './App.css';

const endpoint = 'latest'
const access_key = 'b062fa379169fdfbc19f8bb43cab57f1';
const API_URL = 'http://data.fixer.io/api/' + endpoint + '?access_key=' + access_key + '&base=EUR';

const currencies = [
  {
    key: 'eu',
    text: 'Euro',
    value: 'Euro',
  }
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: {},
      error: null 
    };
  }

  async componentDidMount() {

    try {
      const response = await fetch(API_URL);

      if (response.status >= 300) {
        throw new Error(response.statusText);
      }

      const data = await response.json();

      this.setState({ loading: false, data });
    } catch (e) {
      if (e.name !== "AbortError") this.setState({ error: e.message });
    }
  }
  
  render() {
 
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/bela" exact component={YaraBela} />
            <Route path="/mila" exact component={YaraBela} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
