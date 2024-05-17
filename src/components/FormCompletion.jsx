import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function FormCompletion() {
  const params = useParams();
   const [completion, setCompletion] = useState("");
  const navigate = useNavigate();
  
  const handleCompletion = (e) => {
   
    setCompletion(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
   
   
    const newComment = {
      gameId: params.id,
      completionTime:completion
      
    };
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BACKEND}/completions`,
        newComment
      );
      
  } catch (error) {
    navigate("/error")
  }};

 


  return (

    <div className='completion-form'>

    
    <form onSubmit={handleSubmit}>

      {/*<label >Username</label> <br />
      <input type="text" id="username" name='username' /><br />*/}
      

      <label >Completion Time:</label><br />
      <input type="radio" id="<10" name="completionTime" value="<10" onChange={handleCompletion} />
      <label htmlFor="<10"> Menos de 10 horas</label><br></br>
      <input type="radio" id="10><30" name="completionTime" value="10><30" onChange={handleCompletion} />
      <label htmlFor="10><30"> Entre 10 y 30 horas</label><br></br>
      <input type="radio" id="30><50" name="completionTime" value="30><50"  onChange={handleCompletion} />
      <label htmlFor="30><50"> Entre 30 y 50 horas</label><br></br>
      <input type="radio" id=">50" name="completionTime" value=">50" onChange={handleCompletion} />
      <label htmlFor=">50"> Mas de 50 horas</label><br></br>
      
      <button onClick={navigate(0)} className="botoncito">send</button>
    
    </form>
    </div>

  )
}


export default FormCompletion