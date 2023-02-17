import React, { Component } from "react";

const fnArray = ['J' , 'A' , 'M' , 'E' , 'S'];
const lnArray = ['F' , 'O' , 'X'];
const newFn = [];
const newLn = [];

useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

function runName(thisInt)
{
    for(let it = 0; it < fnArray.length + LnArray.length; it++)
    {
        if(thisInt += 1 && it < fnArray.length)
        {
            newFn.push(fnArray[it]);
            it++;
            return newFn;
        }
        if(thisInt += 1 && it > fnArray.length && it < fnArray.length + LnArray.length)
        {
            newLn.push(lnArray[it]);
            it++;
            return newLn;
        }

    }
}

export class NameBrand extends Component
{
    constructor(props){
    super(props)
    this.state(props)=
    {
        isHover : false,
        firstName: '',
        lastName: ''
    }
    

    this.popbrand = this.popbrand.bind(this);
}
popbrand(evt)
{
    if(isHover == true)
    {
        this.setState(this.state.firstName = runName() , this.state.lastName = runName())
    }
}
render(){
return(
    <>
    
    </>
    )
}
}