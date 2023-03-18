
import Accordion from 'react-bootstrap/Accordion';
import { AccordionContext } from 'react-bootstrap';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { ContextAwareToggle } from '../MyLinks/MyLinks';
import Card from 'react-bootstrap/Card';
import { IconContext } from "react-icons";

import {GiTicTacToe} from "react-icons/gi";
import {GiTwoCoins} from "react-icons/gi";
import {GiTechnoHeart} from "react-icons/gi";
import {GiScrollQuill} from "react-icons/gi";
import {GiBrain} from "react-icons/gi";
import {GiSandSnake} from "react-icons/gi";
import {BiCalendarStar} from "react-icons/bi";
import {TbHeartRateMonitor} from "react-icons/tb";

import { useContext } from 'react';

import Calculator from './Calculator';
import Tic from './Tic';
import Slots from './Slots';
import Match from './Match';
import Snake from './Snake';
import JobTracker from './JobTracker'
import Calendar from './Calendar';

const styleGit = {color:"maroon"};

export default function Projects()
{
 return(
  <>
  <div className = "allPro">
  <IconContext.Provider value={{className : "git", size: 50}}>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <ContextAwareToggle eventKey="0">Tic-Tac-Toe</ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              
              <a href = "https://ticattacktoe.herokuapp.com/" className='git' target="_blank" rel="noopener noreferrer"><GiTicTacToe style={styleGit}/></a>
              <Tic></Tic>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <ContextAwareToggle eventKey="1">Slot Machine</ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
            
            <a href= "https://coinconsumer.netlify.app/" target="_blank" rel="noopener noreferrer"><GiTwoCoins style={styleGit}/></a>
            <Slots></Slots>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>



<Accordion defaultActiveKey="0">
<Card>
  <Card.Header>
    <ContextAwareToggle eventKey="2">Perfect.Match()</ContextAwareToggle>
  </Card.Header>
  <Accordion.Collapse eventKey="2">
    <Card.Body>
      <a href = "https://perfectmatchskills.herokuapp.com/" className='git' target="_blank" rel="noopener noreferrer"><GiTechnoHeart style={styleGit}/></a>
      <Match></Match>
    </Card.Body>
  </Accordion.Collapse>
</Card>
<Card>
  <Card.Header>
    <ContextAwareToggle eventKey="3">FateBook</ContextAwareToggle>
  </Card.Header>
  <Accordion.Collapse eventKey="3">
    <Card.Body>
    <a href= "https://project-004.herokuapp.com/" target="_blank" rel="noopener noreferrer"><GiScrollQuill style={styleGit}/></a>
    
    </Card.Body>
  </Accordion.Collapse>
</Card>
</Accordion>


<Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <ContextAwareToggle eventKey="4">Calculator</ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              
             
              <a href = "https://abasiccalculator.herokuapp.com/" className='git' target="_blank" rel="noopener noreferrer"><GiBrain style={styleGit}/></a>
              <Calculator></Calculator>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <ContextAwareToggle eventKey="5">Snake Game</ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="5">
            <Card.Body>
            <a href= "https://github.com/Y2Kuwu/snake-game" target="_blank" rel="noopener noreferrer"><GiSandSnake style={styleGit}/></a>
            <Snake></Snake>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      </IconContext.Provider>


      <div className='prog'>
      <p >In progress. . . </p>
      </div>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <ContextAwareToggle eventKey="6">Calendar</ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="6">
            <Card.Body>
              
             
              <a href = "https://github.com/Y2Kuwu/React-Calendar" className='git' target="_blank" rel="noopener noreferrer"><BiCalendarStar style={styleGit}/></a>
              <Calendar></Calendar>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <ContextAwareToggle eventKey="7">Job Tracker</ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="7">
            <Card.Body>
            <a href= "https://github.com/Y2Kuwu/ReactAppTrack" target="_blank" rel="noopener noreferrer"><TbHeartRateMonitor style={styleGit}/></a>
            <JobTracker></JobTracker>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      </div>
</>
 );
}