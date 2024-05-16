import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditReview() {
  const params = useParams();
  const navigate = useNavigate()
 
  
  const [dataValue, setDataValue] = useState("");
  const [commentValue, setCommentValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [toppingValue, setToppingValue] = useState("");



useEffect (()=>{
  getData()
  
},[])


const getData= async()=>{

  try {
    const response=await axios.get(`${import.meta.env.VITE_API_BACKEND}/reviews?gameId=${params.id}`)
    console.log(response.data);
    setDataValue(response.data)
  } catch (error) {
    console.log(error);
    
  }


}
  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    console.log("entregando");
    //navigate(`/game/${params.id}`)

    const updatedComment = {
      
      id: params.id,
      name: nameValue,
      comment: commentValue,
      ratings: toppingValue,
    };
    try {
      await axios.patch(`${import.meta.env.VITE_API_BACKEND}/reviews/${params.id}`, updatedComment);
      console.log("tarea editada");
      

     
      
      navigate(-1)//temporalmente enviarlo a details
      //props.getReviews();
    } catch (error) {
      //console.log(error);
    }
    //console.log(newComment);
  };

  const deleteForm =async (e) =>{
    e.preventDefault();
    console.log("entregando");
    //navigate(`/game/${params.id}`)

   
    try {
      await axios.delete(`${import.meta.env.VITE_API_BACKEND}/reviews/${params.id}`);
      console.log("tarea eliminada");
      
      navigate(-1)//temporalmente enviarlo a details
      //props.getReviews();
    } catch (error) {
      //console.log(error);
    }
    //console.log(newComment);
  }
  return (
    <div>
      FormReview
      <h2>Review</h2>
      <form onSubmit={handleSubmitEdit}>
        <div>
          <label>Name:</label>
          <input 
            type="text"
            name="name"
            value={dataValue.name}
            onChange={(e)=>setNameValue(e.target.value)}
          />
        </div>

        <div>
          <label>Comments:</label>
          <textarea
            type="text"
            name="comments"
            value={dataValue.comment}
            onChange={(e)=>setCommentValue(e.target.value)}
          />
        </div>

        <div>
          <label>Potatoes Rating:</label>
          <br />
          <input type="radio" name="rating" value={1} onChange={(e)=>setToppingValue(e.target.value)}></input>
          <label htmlFor="1">1</label>
          <br />

          <input type="radio" name="rating" value={2} onChange={(e)=>setToppingValue(e.target.value)}></input>
          <label htmlFor="2">2</label>
          <br />
          <input type="radio" name="rating" value={3} onChange={(e)=>setToppingValue(e.target.value)}></input>
          <label htmlFor="3">3</label>
          <br />
          <input type="radio" name="rating" value={4} onChange={(e)=>setToppingValue(e.target.value)}></input>
          <label htmlFor="4">4</label>
          <br />
          <input type="radio" name="rating" value={5} onChange={(e)=>setToppingValue(e.target.value)}></input>
          <label htmlFor="5">5</label>
          <br />
        </div>

        <button type="submit">Are you sure?</button>
      </form>
        <button onClick ={deleteForm}>Delete</button>
    </div>
  );


}

export default EditReview