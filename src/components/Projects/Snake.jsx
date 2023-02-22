import { Accordion } from "react-bootstrap"
import Card from 'react-bootstrap/Card';
import { ContextAwareToggle } from '../MyLinks/MyLinks';

export default function Snake(){
    return(

<Accordion defaultActiveKey="0">
<Card>
  <Card.Header>
    <ContextAwareToggle eventKey="6">ABOUT</ContextAwareToggle>
  </Card.Header>
  <Accordion.Collapse eventKey="6">
    <Card.Body>
        
      <p>C++ game utilizing SFML library. Reads user input (up,down,left,right/WASD,SpaceBar), tracks movement, collision points, score, color change, and changes in speed.</p>
      <img src = "start_menu1.png"></img>
      <img src = "start_menu2.png"></img>
      <p>Start sequence with alternating prompts.</p>
      <img src = "gameplay.png"></img>
      <p>Incremental growth and color change upon eating. Speed multiplies after six pick ups.</p>
      <img src = "gameplay_nosnake.png"></img>
      <p>Generates two food items with random x,y locations within set bounds. Food does not spawn on snake or same location.</p>
      <img src = "gameover.png"></img>
      <p>Prompt upon collision with snake's tail.</p>
      

    </Card.Body>
  </Accordion.Collapse>
</Card>
</Accordion>

)
}