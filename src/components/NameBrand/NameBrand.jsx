import { Component } from "react";
import { useState, useEffect } from 'react';

// import $ from "jquery"

const fade = document.querySelector("nameTrack")

const fnArray = ['J' , 'a' , 'm' , 'e' , 's'];
const lnArray = [' ', 'F' , 'o' , 'x' ,' '];
let newFn = [];
let newLn = [];
let main = [];

let firstBind= [];
let secondBind= [];
//let reset = false;

const IntTrack = (props) => {
    const [seconds, setSeconds] = useState(0);
    let thisName = useState([]);
    // const [reset, setReset] = useState();
    //const [letter, setLetter] = useState([]);
    // const [wait, statement] = useState(false);
    console.log(props)

useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
      //runName(seconds);
      //sec(seconds)
    }, 450);
    
    return () => clearInterval(interval);
  }, []);
   
  
//   function sec(thisSec)
//   {
//     return thisSec;
//   }

//   function reset(props)
//   {
//     console.log(props)
    
    // if(passedProps = 1)
    // {
    //     nameBranding(sec);
    // }
    // if(passedProps >= 2)
    // {
    //     this.useState(10)
    //     nameBranding();
    // }

    
//     function reset(props)
//   {
//     if(seconds == 0 && props > 1)
//     {
//         main = [];
//         firstBind = [];
//         secondBind = [];
//         newFn = [];
//         newLn = [];
//     }
//   }
  


function nameBranding()
  {
    if(seconds < fnArray.length)
    {
        
        firstBind = newFn.concat(fnArray[seconds])
        main.push(firstBind);
        return main.map(x => x);
        
    }
    else if(seconds <= fnArray.length + lnArray.length + 5)
    {
        secondBind = newLn.concat(lnArray[seconds-fnArray.length])
        main.push(secondBind);
        return main.map(x => x);
    }
    // else
    // {
    //     return main.map(x=>x)
    // }
    
    else
    {   
       
        main = [];
        setSeconds(0)
        // firstBind = [];
        // secondBind = [];
        
    }
}
    
  


   
  useEffect(()=>{
    nameBranding();
  })
    //   useEffect(()=>{
    //     async function getName()
    //     {
    //         const letter = await runName(seconds);
    //         setLetter(letter);
    //     }
    // getName();
    // }, [])

// async function runName(thisInt)
// {
   
//     for(let itf = 0; itf < fnArray.length; itf++)
//      {
//         //console.log(thisInt)
//         if(thisInt < fnArray.length)
//         {
//             //newFn.push(fnArray[seconds]);
//             //let newFn = [].concat(fnArray, itf);
         
//             newFn.push(fnArray[itf])
//             //return fnArray;
//             console.log(thisInt)
//             return newFn;
//         }
//         itf+=1;

        
        // else if (thisInt > 1 && thisInt <= fnArray.length)
        // {
        //     newFn.push(fnArray[seconds]);
        //     console.log(newFn)
        //     return newFn;
        
    
    
        //itf++;
  // }
// }


//console.log(letter);

    // for(let itl = 0; itl < lnArray.length; itl++)
    // {

    // }
        // else if(thisInt += 1 && it > fnArray.length && it < fnArray.length + lnArray.length)
        // {
        //     newLn.push(lnArray[it]);
        //     it++;
        //     return newLn;
        // }

    


return (
    <>
        {/* {newFn.map(letters=>
        <p key = {"this" + `${seconds}`}>{letters}</p> 
        )}  */}
        {/* {reset(props)} */}
        {/* <p className="nameTrack">{nameBranding()}</p> */}
        
        {/* <p>{console.log(thisName)}</p> */}
        
        <p className="nameTrack">{main}</p>
       
      
    </>
)
}

export default IntTrack;
// class NameBrand extends Component
// {
//     constructor(props){
//     super(props)
//     this.state=
//     {
//         isHover : false,
//         firstName: '',
//         lastName: ''
//     }
    

    // this.popbrand = this.popbrand.bind(this);
// }
// popbrand(evt)
// {
//     if(isHover == true)
//     {
//                 //two sep?
//         this.setState(this.state.firstName = runName() , this.state.lastName = runName())
//     }
// }
// render(){
// return(
//     <>
//         <p>{IntTrack()}</p>
//     </>
//     )
// }
// }