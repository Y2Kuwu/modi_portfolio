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
      <br></br>
      <div className ="ticTac">
      <p className="pTic">Start sequence: choose X or O, exit the game, or start over.</p>
      <img src = "ticStart.png" id ="tic1"></img>
      <br></br>
      <br></br>
      <p className="pTic">CPU wins</p>
      <img src = "cpuWin.png" id ="tic2"></img>
      <br></br>
      <br></br>
      <p className="pTic">Loss message</p>
      <img src = "cpuWinConfirm.png" id ="tic3"></img>
      <br></br>
      <br></br>
      <p className="pTic">Win Message</p>
      <img src = "plyWinConfirm.png" id ="tic4"></img>
      </div>

    </Card.Body>
  </Accordion.Collapse>
</Card>
</Accordion>

)
}