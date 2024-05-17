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
  setData()
  
},[])

const setData = async()=>{
  try {
  const response=await axios.get(`${import.meta.env.VITE_API_BACKEND}/reviews?gameId=${params.id}`)
  setNameValue(response.data.name)
  setCommentValue(response.data.comment)


} catch(error){
  navigate("/error")
}}

const getData= async()=>{

  try {
    const response=await axios.get(`${import.meta.env.VITE_API_BACKEND}/reviews/${params.id}`)
   
    setDataValue(response.data)

    
  } catch (error) {
    navigate("/error")
    
  }


}
  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    

    const updatedComment = {
      
      id: params.id,
      name: nameValue,
      comment: commentValue,
      ratings: toppingValue,
    };
    try {
      await axios.patch(`${import.meta.env.VITE_API_BACKEND}/reviews/${params.id}`, updatedComment);
     
      

     
      
      navigate(-1)//temporalmente enviarlo a details
      //props.getReviews();
    } catch (error) {
      navigate("/error")
      
    }
    
  };

  const deleteForm =async (e) =>{
    e.preventDefault();
    
    

   
    try {
      await axios.delete(`${import.meta.env.VITE_API_BACKEND}/reviews/${params.id}`);
      
      
      navigate(-1)//temporalmente enviarlo a details
      //props.getReviews();
    } catch (error) {
      navigate("/error")
      
    }
    
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

        <button className="botoncito" type="submit">Are you sure?</button>
      </form>
        <button className="botoncito" onClick ={deleteForm}>Delete</button>
    </div>
  );


}

export default EditReview