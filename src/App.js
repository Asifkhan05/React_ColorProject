import React from 'react'
import Square from './Square'
import Input from './Input'
import { useState } from 'react'
import "./App.css"


function App() {
 let [color,reColor]=useState("")
 let [hex,reHex]  =useState("")
 let [on,off] =useState(true)


  return (
    <div className='App'>
     <Square 
     color={color}
     hex ={hex}
     on ={on}
     />
     <Input 
     color={color}
     reColor={reColor}
     reHex={reHex}
     off ={off}
     on={on}
     />
    </div>
  )
}

export default App