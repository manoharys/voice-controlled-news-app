import React, {useEffect} from 'react';
import alanBtn from "@alan-ai/alan-sdk-web";

const alanKey = process.env.REACT_APP_ALAN_SDK_KEY;
console.log(alanKey)

function App() {
  useEffect(()=>{
    alanBtn({
      key: alanKey,
      onCommand: ({command})=>{
        if(command=="test"){
          alert("This is code is executed!!");
        }
      }
    })
  },[])

  return (
    <div>
      Alan new application
    </div>
  )
}

export default App
