//import React, { Component } from 'react';
import {render} from 'react-dom';
import { IconContext } from "react-icons";
import Projects from '../Projects/Projects';
// import Accordion from 'react-bootstrap/Accordion';
// import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { useContext } from 'react';
// import Card from 'react-bootstrap/Card';
import { VscGithub } from "react-icons/vsc";
import {ImProfile} from "react-icons/im";


// export default class MyLinks extends Component{
// constructor(props){
//     super(props)
//     this.state = 
//     {
//        linkShow: ''
//     }
//     // this.handleLink = this.handleLink.bind(this);
// }
//     // handleLink()
//     // {

//     // }

// render(){
// return(




import Accordion from 'react-bootstrap/Accordion';
import { AccordionContext } from 'react-bootstrap';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button
      type="button"
      style={{ backgroundColor: isCurrentEventKey ? 'maroon' : 'gray' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}





const styleGit = {color:"maroon"};

function Links() {
  return (
   
    <IconContext.Provider value={{className : "git", size: 50}}>
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header className ="linkBtn">
          <ContextAwareToggle eventKey="1">Links</ContextAwareToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body className='linkCard'><span className='my'>My</span><a href = "https://github.com/Y2Kuwu" className='git' target="_blank" rel="noopener noreferrer"><VscGithub style={styleGit}/></a>
          <br></br>
          <span className='my'>My</span><a href= "https://github.com/Y2Kuwu" target="_blank" rel="noopener noreferrer"><ImProfile style={styleGit}/></a>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      
      <Card>

        {/* PROJECTS */}
        <Card.Header className ="projBtn">
          <ContextAwareToggle eventKey="2">Projects</ContextAwareToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body className='projCard'>

            <Projects></Projects>

          </Card.Body>
          
        </Accordion.Collapse>
      </Card>
    </Accordion>
    </IconContext.Provider>
  );
}

export {Links, ContextAwareToggle}






        //   <li><a id = 'gh' href= "https://github.com/Y2Kuwu" target="_blank" rel="noopener noreferrer"> GitHub</a></li>
    // <li><a id = 're' href= "https://github.com/Y2Kuwu" target="_blank" rel="noopener noreferrer"> Resume</a></li>
    // <li><a id = 'tt' href= "https://github.com/Y2Kuwu/tic-tac-toe" target="_blank" rel="noopener noreferrer"> Tic-Tac-Toe</a><button id = "tic">?</button></li>
    // <li><a id = 'sm' href= "https://coinconsumer.netlify.app/" target="_blank" rel="noopener noreferrer"> Slot Machine</a><button id = "slot">?</button></li>
    // <li><a id = 'rl' href= "https://github.com/Y2Kuwu" target="_blank" rel="noopener noreferrer"> RadLibs</a></li>
    // <li><a id = 'pm' href= "https://perfectmatchskills.herokuapp.com/" target="_blank" rel="noopener noreferrer"> Perfect.match()</a></li>
    // <li><a id = 'fb' href= "https://project-004.herokuapp.com/" target="_blank" rel="noopener noreferrer"> FateBook</a></li>
    // <li><a id = 'ca' href= "https://github.com/Y2Kuwu/Calculator" target="_blank" rel="noopener noreferrer"> Calculator</a><button id = "calc">?</button></li>
