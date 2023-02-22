import React, { useState, useRef } from "react";
import { IconContext } from "react-icons";
import {AiOutlineLinkedin} from "react-icons/ai";
import {MdAlternateEmail} from "react-icons/md";
import {GiRotaryPhone} from "react-icons/gi";
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

export default function Contact(){
const [showEmail, setShowEmail] = useState(false);
const [showPhone, setShowPhone] = useState(false);
const targetE = useRef(null);
const targetP = useRef(null);

    return(
        
             <IconContext.Provider value={{className : "git", size: 50}}>
                
                <div className="in"><span className='myContact'>My</span><a href= "https://www.linkedin.com/in/james-fox-v/" target="_blank" rel="noopener noreferrer"><AiOutlineLinkedin/></a></div>
                <br></br>
               
                <div className="em">
                <span className='myContact' >My</span>
                <Button className='email' ref={targetE} onClick={() => setShowEmail(!showEmail)}>
                <MdAlternateEmail/>
                </Button>
                <Overlay target={targetE.current} show={showEmail} placement="right">
                {(props) => (
                <Tooltip id="email" {...props}>
                jamesmfox5@gmail.com
                </Tooltip>
                )}
                </Overlay>
                </div> 
                <br></br>
                <div className ="p">
                <span className='myContact' >My</span>
                <Button className='phone' ref={targetP} onClick={() => setShowPhone(!showPhone)}>
                <GiRotaryPhone/>
                </Button>
                <Overlay target={targetP.current} show={showPhone} placement="right">
                {(props) => (
                <Tooltip id="phone" {...props}>
                (425)691-8278
                </Tooltip>
                )}
                </Overlay>
                </div>
            </IconContext.Provider>
             
    );
}
