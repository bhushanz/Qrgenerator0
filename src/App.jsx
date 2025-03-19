import React, { useState } from "react";
import QrGenerator from './Components/QrGenerator'
import Qrwindow from './Components/Qrwindow'

const App = () => {
  const [text, setText] = useState('')
  const [showQrWindow, setShowQrWindow] = useState(false);

  return (
    <>
      <QrGenerator value={text}
       Setvalue={setText} 
       
       handleClick={()=>
        setShowQrWindow(true)
      
      }
      
      
      />
     {showQrWindow &&
      <Qrwindow 
       value={text}
       handleClose ={()=> { if(text.trim()!==''){
        setShowQrWindow(false)}
        setText('')
      }}
     
     />}
    </>
  )
}

export default App
