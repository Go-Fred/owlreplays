import React, { Component } from "react";
import heartIcon from "./img/Heart.ico";
import "./App.css";
import Home from "./pages/Home";
import VideoPreview from "./pages/VideoPreview";
import { Navbar, Nav, NavItem } from "react-bootstrap";

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentVideoTitle: null,
        };
    }

    updateCurrentVideoTitle = (title) => {
        this.setState({
            currentVideoTitle: title
        });
    }

  render() {
    return (
        <Router>
            <div className="App">
            <Navbar collapseOnSelect>
                <Navbar.Header>
                <Navbar.Brand>
                    <NavLink to="/">
                        <h1>The Overwatch League Replays</h1>
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle />
                </Navbar.Header>
            </Navbar>
            <div className="App-container">
            <Switch>
                <Route exact path="/" render={()=><Home updateCurrentVideoTitle={this.updateCurrentVideoTitle}/>} />
                <Route path="/videos/:id" render={({ match }) => <VideoPreview id={match.params.id} title={this.state.currentVideoTitle}/>} />
            </Switch>
            </div>
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