import React from 'react'
import colorNames from 'colornames';

function Input({color,reHex,reColor,on,off}) {
  return (
    <form onSubmit={(e)=>{e.preventDefault()}}>

      <input type="text" 
      value={color}
      onChange={(e)=>{reColor(e.target.value);
      reHex(colorNames(e.target.value))}} />

      <button onClick={()=>off(!on)}>Tap to color change</button>

    </form>
  )
}

export default Input