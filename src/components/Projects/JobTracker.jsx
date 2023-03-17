import { Accordion } from "react-bootstrap"
import Card from 'react-bootstrap/Card';
import { ContextAwareToggle } from '../MyLinks/MyLinks';

export default function JobTracker(){
    return(

<Accordion defaultActiveKey="0">
<Card>
  <Card.Header>
    <ContextAwareToggle eventKey="6">ABOUT</ContextAwareToggle>
  </Card.Header>
  <Accordion.Collapse eventKey="6">
    <Card.Body className="jobs">
    
        <p>An app for managing jobs and their requirements</p>
        <p>Currently has most CRUD capabilities</p>
        <br></br>
      <img src = "appTrackCreate.png" id = "job1"></img>
       
        <br></br>
        <p>Has material list per job and price per unit.</p>
      <img src = "appTrackMaterials.png" id = "job2"></img>
        <br></br>
        <br></br>
        <p>Navigation bar. Currently create job link has been prioritized.</p>

      <img src = "appTrackNav.png" id = "job3"></img>
        <br></br>
        <br></br>
        <p>Shows all jobs for the user signed in.</p>
      <img src = "appTrackAllJobsMats.png" id = "job4"></img>
      <br></br>
      <img src = "appTrackAllJobs.png" id = "job5"></img>
       
        <br></br>
        <br></br>
        <p>Shows options for individual jobs.</p>
      <img src = "appTrackJobOpt.png" id = "job6"></img>
        
        <br></br>
        <br></br>
        <p>Edit and update basic information of job.</p>
      <img src = "appTrackEdit.png" id = "job7"></img>
       
 
    
      
    </Card.Body>
  </Accordion.Collapse>
</Card>
</Accordion>

)
}