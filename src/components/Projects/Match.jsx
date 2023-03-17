import { Accordion } from "react-bootstrap"
import Card from 'react-bootstrap/Card';
import { ContextAwareToggle } from '../MyLinks/MyLinks';

export default function Match(){
    return(

<Accordion defaultActiveKey="0">
<Card>
  <Card.Header>
    <ContextAwareToggle eventKey="6">ABOUT</ContextAwareToggle>
  </Card.Header>
  <Accordion.Collapse eventKey="6">
    <Card.Body className="match">
    
        <p>Landing page for Perfect.Match() A website designed to make developers to their ideal job. Utilizing an API to find recent matches by keywords defined by the user or by relevency.</p>
        <p>This was a group project using the skills provided. First major python project. Utilizes all crud methods and stores data using Django and MongoDB integration. </p>
        <br></br>
      <img src = "landing.png"></img>
       
        <br></br>
        <p>Sign up page. Uses jwt authorization with semi strict requirements.</p>

      <img src = "signup.png"></img>
        <br></br>
        <br></br>
        <p>Profile page. User can add their skills here which we then be used as search criteria for potential matches.</p>

      <img src = "prof.png"></img>
        <br></br>
        <br></br>
        <p>Search engine by keywords forund in job description, title, requirements.</p>
      <img src = "matchSearch.png"></img>
       
        <br></br>
        <br></br>
        <p>User choosen matches then attached to profile for later viewing.</p>
      <img src = "matchsaved.png"></img>
        
        <br></br>
        <br></br>
        <p>'Auto' matching. Information is sought out by system to match to user and attached to profile.</p>
      <img src = "match.png"></img>
       
 
    
      
    </Card.Body>
  </Accordion.Collapse>
</Card>
</Accordion>

)
}