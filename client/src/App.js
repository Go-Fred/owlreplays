import React, { Component } from "react";
import heartIcon from "./img/Heart.ico";
import "./App.css";
import Home from "./pages/Home";
import VideoPreview from "./pages/VideoPreview";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import owlImg from "./img/ow-league.png";
import owwcImg from "./img/ow-worldcup.png";


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
            championship: "overwatch-league",
        };
    }

    updateCurrentVideoTitle = (title) => {
        this.setState({
            currentVideoTitle: title
        });
    }

    changeChampionship = (title) => {
        this.setState({
            championship: title
        });
    }

    getNavTitle = (championship) => {
        switch (championship) {
            case "overwatch-league" :
                return "The Overwatch League Replays";
            case "world-cup" :
                return "The Overwatch World Cup Replays";
            default:
                return "The Overwatch League Replays";
        }
    }

  render() {

    let {championship} = this.state;

    return (
        <Router>
            <div className="app">
                <Navbar collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <NavLink to="/">
                                {this.getNavTitle(championship)}
                            </NavLink>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                            <NavLink exact to='/' onClick={() => this.changeChampionship("overwatch-league")}>
                                <img
                                className="navImg"
                                src={owlImg}
                                alt="owlImg"
                                />
                            </NavLink>
                            <NavLink to='/world-cup' onClick={() => this.changeChampionship("world-cup")}>
                                <img
                                className="navImg"
                                src={owwcImg}
                                alt="owwcImg"
                                />
                            </NavLink>   
                    </Navbar.Collapse>
                </Navbar>
            <div className="app-container">    
            <div className="content">
            <Switch>
                <Route exact path="/" component={()=><Home  championship={championship} updateCurrentVideoTitle={this.updateCurrentVideoTitle}/>} />
                <Route exact path={"/" + championship} component={()=><Home championship={championship} updateCurrentVideoTitle={this.updateCurrentVideoTitle}/>} />
                <Route path={"/" + championship + "/videos/:id"} component={({ match }) => <VideoPreview id={match.params.id} title={this.state.currentVideoTitle}/>} />
            </Switch>
            </div>
            <div className="footer">
                Made with{" "}
                <a href="http://www.designbolts.com">
                <img className="icon" src={heartIcon} alt="logo" />
                </a>{" "}
                by an Overwatch addict
            </div>
            </div>
            </div>
        </Router>
        );
    }
}