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
    <Card.Body>
    
      <img src = "slotMac.png"></img>
      <p>Responsive slot machine with animations, accurate scoring, and audio events. All personally created assets, no CSS used besides placement and transparent buttons.</p>
      <img src = "slotMatch.png"></img>
      Matching two symbols and updated score. 
      <img src = "score.png"></img>
      <img src = "slotButtons.png"></img>
      Cheat button to avoid losing a point upon loss. Terminate button for rage quitting. 
      
    </Card.Body>
  </Accordion.Collapse>
</Card>
</Accordion>

)
}