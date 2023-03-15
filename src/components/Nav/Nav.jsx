import '../../index.css';
import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import App from '../../pages/App/App';
import { HomePage } from '../HomePage/HomePage';


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
        clicked: false,
        lift: ''
    }
    // this.handlehome = this.handlehome.bind(this)
    // onClick ={this.handlehome}
    this.handleClickedLink = this.handleClickedLink.bind(this);
}
// handlehome = evt =>
//     {
//         if(window.location.href = './HomePage')
//         {
//         this.setState();
//         }
//     }



handleClickedLink()
{
    this.setState(currState=>
        ({
            clicked : !currState.clicked
        }))
}
    
render(){
    return(
        <>
        
  

        <nav className = "dynNav">
        <ul>
        <li ><Link to ="/HomePage" id = "li1"  data = {this.state.clicked}>Home</Link></li>
        <li ><Link to = "/Links" id = "li2" onClick={this.handleClickedLink()}>My links</Link></li>
        <li ><Link to = "/Contact" id = "li3" onClick={this.handleClickedLink()}>Contact info</Link></li>
        </ul>
        </nav>

        </>)
}
}
