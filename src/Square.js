import React from 'react'

function Square({color,hex,on}) {
  return (
    <div className='square' style={{background:hex,color:on?"#000":"#FFF"}}>
      <p>{color?color:"empty color"}</p>
      <p>{hex?hex:null}</p>
      
    </div>
  )
}

export default Square