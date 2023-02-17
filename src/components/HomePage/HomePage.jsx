import React, { Component } from "react";
import { useState } from "react";
//import me from './public/me_blk&wht.jpg';

export default class HomePage extends Component 
{
    state =
    {
        statement : false,
        pictureState : ''
    }   

   


   

render(){
    const {statement} = this.state;
return(
    <>
        

        <img src={'/me_blk&wht.jpg'} className="myPicture" onMouseEnter={() => this.setState({statement : !statement})}/>
        
        {statement
        ? <div className="myState">
        <p id="brandCenter"> Glad you could make it!</p>
        <p id="state1">My name is James Fox, I am a Fullstack Software Engineer with a mindset geared towards functionality, presentability, and efficiency.
           I have experience creating and designing pages like the one you're viewing now. I've worked both independently and as a team to create some promising applications, and always looking to the next chance to improve my skills.
           Technology and design has always been something I've been drawn to.. To make it a career is truly a gift.
           I've found as a Fullstack Engineer the final product is not always worth sprinting towards without a plan or proper intent.</p>
           <p id="state2">Working meticulously, with a purpose, and with a solid foundation seems to bring greater returns. In nearly all cases it's worth the effort we put in from start to finish.
           With this being such a diverse field I find communication to be one of our best tools for bringing together a truly remarkable project and uniting a team.
           That being said I have a background that has required me to follow that truth and the technical skills have followed as a result.</p>
      
        <p id="state3">Take a look around the site and tell me what you think!<br></br>
        And thank you for stopping by.</p>
        
        </div>
        :null
        }
    </>
)}
}