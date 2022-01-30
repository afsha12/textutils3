import React from 'react';

export default function About (props) {
  return( 
  <div className='container'  style={{backgroundcolor: props.mode==='dark'?'white':'black'}} >
    <h>about us</h>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, impedit deleniti a maiores adipisci doloremque eligendi, eaque assumenda voluptates iste quibusdam nisi perspiciatis repellat dolor quisquam, ea quasi! Ut, labore?</p>
    <button className='btn btn-primary mx-2' onClick={()=>{props.toggleMode(null)}}>toggle</button>
  </div>
  )
   
}
