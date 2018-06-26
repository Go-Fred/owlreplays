import React, { Component } from "react";
import heartIcon from "./img/Heart.ico";
import "./App.css";
import HomePage from "./HomePage.js";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import ggLogo from "./img/GG-logo-alt.png";
import githubLogo from "./img/Github-logo-alt.png";

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link
} from "react-router-dom";

const HomeRoute = () => <HomePage />;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      fetching: true
    };
  }

  componentDidMount() {
    fetch('/api')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        this.setState({
          message: json.message,
          fetching: false
        });
      }).catch(e => {
        this.setState({
          message: `API call failed: ${e}`,
          fetching: false
        });
      })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <NavLink to="/">
                  <img className="logo" src={ggLogo} alt="logo" />
                </NavLink>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Navbar>
          <Route exact path="/" component={HomeRoute} />
          <div className="App-footer">
            Made with{" "}
            <a href="http://www.designbolts.com">
              <img className="icon" src={heartIcon} alt="logo" />
            </a>{" "}
            by an Overwatch addict
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
