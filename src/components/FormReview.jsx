import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";




function FormReview() {
  const params=useParams()
  const [nameValue, setNameValue]=useState("")
  const [commentValue, setCommentValue]=useState("")
  const [topping, setTopping]=useState("")





  

  /*//const[review, setReview]=useState([])
  
console.log(params);


  useEffect(()=>{

    axios.get(`${import.meta.env.VITE_API_BACKEND}/reviews`)
    .then((response)=>{
      console.log(response.data);
      setReview(response)
      //const backendGameId= setReview(response.data)
     // console.log(backendGameId); 
  console.log(review);

    }).catch((error)=>{
      console.log(error);
    })


  }, [])*/













  const handleNameChange=(e)=>{
   // console.log("escribiendo", e.target.value);
    setNameValue(e.target.value.toUpperCase())
  }
  const handleCommentChange=(e)=>{

    setCommentValue (e.target.value.toUpperCase())
  }
  const handleTopping=(e)=>{
   // console.log("point");
    setTopping(e.target.value)
  }

  const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log("entregando");

    const newComment={
      gameId:"gameId",
      name: nameValue,
      comment: commentValue,
      ratings:topping,

    }
    try {
      const response=await axios.post(`${import.meta.env.VITE_API_BACKEND}/reviews`, newComment)
      console.log("tarea creada");
    } catch (error) {
      console.log(error);
      
    }
    console.log(newComment);

  }
  return (
    <div>
      FormReview
      <h2>Review</h2>
      <form onSubmit={handleSubmit}>
        <div>
          
          <label>Name:</label>
          <input type="text" name="name" value={nameValue} onChange={handleNameChange}/>
        </div>

        <div>
          <label>Comments:</label>
          <textarea type="text" name="comments" value={commentValue} onChange={handleCommentChange} />
        </div>

        <div>
           
          <label>Potatoes Rating:</label>
          <br/>
          <input type="radio" name="1"onChange={handleTopping}></input>
          <label htmlFor="1">1</label>
          <br/>
          
          <input type="radio" name="1"onChange={handleTopping}></input>
          <label htmlFor="1">2</label>
          <br/>
          <input type="radio" name="1"onChange={handleTopping}></input>
          <label htmlFor="1">3</label>
          <br/>
          <input type="radio" name="1"onChange={handleTopping}></input>
          <label htmlFor="1">4</label>
          <br/>
          <input type="radio" name="1"onChange={handleTopping}></input>
          <label htmlFor="1">5</label>
          <br/>

        </div>

        <button>Are you sure?</button>
      </form>
    </div>
  );
}

export default FormReview;
