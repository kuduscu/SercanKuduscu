import React, { useState } from "react";
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0)
  
  const Tiklama = () => {
    setCounter(counter + 1)
  }

  return (<div>
    
    <div >
    <p>Butona bu kadar bastınız:</p>
        {counter}
      </div>   
      <div className="buttons">
        <button style={{
          fontSize: '60%',
          position: 'absolute',
          bottom:0,
          right:0,
          color: 'black',
        }}
          onClick={Tiklama}>Tık Sayacı</button>        
      </div>
    </div>
  )
}
  
export default App