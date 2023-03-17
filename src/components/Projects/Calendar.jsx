import { Accordion } from "react-bootstrap"
import Card from 'react-bootstrap/Card';
import { ContextAwareToggle } from '../MyLinks/MyLinks';

export default function Calendar(){
    return(

<Accordion defaultActiveKey="0">
<Card>
  <Card.Header>
    <ContextAwareToggle eventKey="6">ABOUT</ContextAwareToggle>
  </Card.Header>
  <Accordion.Collapse eventKey="6">
    <Card.Body className="date">
    
        <p>Tracks user's tasks with multiple categories. Will feature search functionality, reminder settings, attach parties and notify, etc.</p>
      <img src = "calMain.png" id = "date1"></img>
        <br></br>
      <img src = "calZoom.png" id = "date2"></img>
        <br></br>
        <br></br>
        <p>Currently allowing saves with limited information input. Models will be fully implemented in the future.</p>

      <img src = "calAdd.png" id = "date3"></img>
        <br></br>
        <br></br>
        <p>Accurate date tracking and class component functionality.</p>
      <img src = "calUpdate.png" id = "date4"></img>
      
       
 
    
      
    </Card.Body>
  </Accordion.Collapse>
</Card>
</Accordion>

)
}