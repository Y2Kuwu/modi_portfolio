import { Accordion } from "react-bootstrap"
import Card from 'react-bootstrap/Card';
import { ContextAwareToggle } from '../MyLinks/MyLinks';

export default function Tic(){
    return(

<Accordion defaultActiveKey="0">
<Card>
  <Card.Header>
    <ContextAwareToggle eventKey="6">ABOUT</ContextAwareToggle>
  </Card.Header>
  <Accordion.Collapse eventKey="6">
    <Card.Body className="tic">
    <p>Classic match three tic-tac-toe. CPU 'chooses' random play within the remaining squares</p>
      
      <p>Start sequence: choose X or O, exit the game, or start over.</p>
      <img src = "ticStart.png"></img>
      
      <p>CPU wins</p>
      <img src = "cpuWin.png"></img>
      <p>Loss message</p>
      <img src = "cpuWinConfirm.png"></img>
      <p>Win Message</p>
      <img src = "plyWinConfirm.png"></img>

    </Card.Body>
  </Accordion.Collapse>
</Card>
</Accordion>

)
}