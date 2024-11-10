import React, { useState } from 'react'


function Add() {
    const [Add , setAdd] = useState("");
    const [show , setShow] = useState("");


  return (  
   function submit(e){
    setShow(e.target.value)
    } 

 <div>      
<>
<form >
    <input type="text" placeholder='Enter Name' onChange={submit}/> <br />
    <input type="password" placeholder='password' /> <br />
    <input type="submit" value="Submit"  />
</form>
<div>
    <p>Entered Name: {Add}</p>
    <p>Entered Password: {show}</p>
</div>
</>
</div>
  )
 
}

export default Add;


