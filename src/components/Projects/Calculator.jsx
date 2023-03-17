import { Accordion } from "react-bootstrap"
import Card from 'react-bootstrap/Card';
import { ContextAwareToggle } from '../MyLinks/MyLinks';

export default function Calculator(){
    return(

<Accordion defaultActiveKey="0" >
<Card>
  <Card.Header>
    <ContextAwareToggle eventKey="6">ABOUT</ContextAwareToggle>
  </Card.Header>
  <Accordion.Collapse eventKey="6">
    <Card.Body className="calc">
    <p>Interactive calculator with accurate calculations, responsive design, and a simple layout. JS with class based functions, Jquery, CSS, and basic HTML.</p>
      <img src = "calculator.png" className="calcHere"></img>
      

    </Card.Body>
  </Accordion.Collapse>
</Card>
</Accordion>

)
}