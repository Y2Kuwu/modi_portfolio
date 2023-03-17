import { Accordion } from "react-bootstrap"
import Card from 'react-bootstrap/Card';
import { ContextAwareToggle } from '../MyLinks/MyLinks';

export default function Slots(){
    return(

<Accordion defaultActiveKey="0">
<Card>
  <Card.Header>
    <ContextAwareToggle eventKey="6">ABOUT</ContextAwareToggle>
  </Card.Header>
  <Accordion.Collapse eventKey="6">
    <Card.Body className="slots">
    
    <p className="slotWord">Responsive slot machine with animations, accurate scoring, and audio events. All personally created assets, no CSS used besides placement and transparent buttons.</p>
      <img src = "slotMac.png"></img>
      <br></br>
      <br></br>
      <p className="slotWord">Matching two symbols and updated score</p>
      <img src = "slotMatch.png"></img>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <p className="slotWord">Cheat button to avoid losing a point upon loss. Terminate button for rage quitting. </p>
      <div className="cheatScore">
      <img src = "score.png" className="score"></img>
      <img src = "slotButtons.png" className="cheat"></img>
      </div>
      
    </Card.Body>
  </Accordion.Collapse>
</Card>
</Accordion>

)
}