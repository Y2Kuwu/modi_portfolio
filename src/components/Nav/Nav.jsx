import '../../index.css';
import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Nav extends Component
{
    constructor(props){
    super(props)
    this.state=
    {
        isHome: true,
        xPos: '',
        yPos: '',
        location: 0,
    }
    this.handlehome = this.handlehome.bind(this)
}
handlehome = evt =>
    {
        if(window.location.href = './HomePage')
        {
        this.setState();
        }
    }
    
render(){
    return(
        <nav className = "dynNav">
        <ul>
        <li ><Link to ="/HomePage" id = "li1" onClick ={this.handlehome}>Home</Link></li>
        <li ><Link to = "/Links" id = "li2">My links</Link></li>
        <li ><Link to = "/MyContact" id = "li3">Contact info</Link></li>
        </ul>
        </nav>
    )



}
}
