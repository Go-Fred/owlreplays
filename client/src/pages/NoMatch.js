import React, { Component } from 'react';
import {
    Link,
  } from 'react-router-dom'

export default class NoMatch extends Component {
    render(){
        return (
        <div className="error" >
            <p>¯\_(ツ)_/¯</p><br></br>
            <p>Oups! There's nothing to see on this page. Do you want to return <Link to="/">home</Link>?</p>
        </div>
        )
    }  
}