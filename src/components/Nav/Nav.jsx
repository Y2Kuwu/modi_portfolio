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
        //thisStyle: "dynNav",
        count : 0,
    }
    // this.handlehome = this.handlehome.bind(this)
    // onClick ={this.handlehome}
    this.handleClickedLink = this.handleClickedLink.bind(this , false);
    this.handleShift = this.handleClickedLink.bind(this);
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
            clicked : !currState.clicked,
        }))
        
}

// handleShift()
// {
//     this.setState(
//         ({
//             thisStyle : "shiftNav"
//         }))
// }
    
render(){
    return(
        <>
        
  
        {/* {this.state.count% 2?
      
        {this.setState({thisStyle : "dynNav"})}
        :
        {this.setState({thisStyle : "dynNav"})) */}

  
        
        {/* <nav className = {this.state.thisStyle}> */}
        <nav className = "dynNav">
           
        <ul>
        <li ><Link to ="/HomePage" id = "li1" onClick={()=>this.handleClickedLink.bind(this , true)}>Home</Link></li>
        {/* <li ><Link to = "/Links" id = "li2" onClick={()=>this.handleShift() (this.state.count +1)}>My links</Link></li> */}
        <li ><Link to = "/Links" id = "li2" >My links</Link></li>

        <li ><Link to = "/Contact" id = "li3" onClick={()=>this.handleClickedLink.bind(this , true)}>Contact info</Link></li>

        </ul>
        </nav>
        

</>
    )}
}

