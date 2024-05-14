import React from 'react'
import {useState} from "react"

function FormCompletion() {

  

   <div className=""></div>

  const [ nameValue, setNameValue ] = useState("")
  return (

    <div className='completion-form'>

    
    <form>
      <label >Completion Time:</label><br />
      <input type="radio" id="<10" name="completionTime" value="<10" />
      <label for="<10"> Menos de 10 horas</label><br></br>
      <input type="radio" id="10><30" name="completionTime" value="10><30" />
      <label for="10><30"> Entre 10 y 30 horas</label><br></br>
      <input type="radio" id="30><50" name="completionTime" value="30><50" />
      <label for="30><50"> Entre 30 y 50 horas</label><br></br>
      <input type="radio" id=">50" name="completionTime" value=">50" />
      <label for=">50"> Mas de 50 horas</label><br></br>
      
    

    </form>
    </div>

  )
}

export default FormCompletion