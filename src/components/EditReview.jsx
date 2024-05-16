import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditReview() {
  const params = useParams();
  const navigate = useNavigate()
  const commentId = useParams()
  
  const [nameValue, setNameValue] = useState("");
  const [commentValue, setCommentValue] = useState("");
  const [topping, setTopping] = useState("");
 


useEffect (()=>{
  getData()
},[])


const getData= async()=>{

  try {
    const response=await axios.get(`${import.meta.env.VITE_API_BACKEND}/reviews?gameId=${params.id}`)
    console.log(response);
    setNameValue(response.data.name)
    setCommentValue(response.data.comment)
    setTopping(response.data.ratings)
    commentId(response.data.id)
  } catch (error) {
    console.log(error);
    
  }


}
  /*const handleNameChange = (e) => {
    // console.log("escribiendo", e.target.value);
    setNameValue(e.target.value.toUpperCase());
  };
  const handleCommentChange = (e) => {
    setCommentValue(e.target.value.toUpperCase());
  };
  const handleTopping = (e) => {
    // console.log("point");
    setTopping(e.target.value);
  };*/

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    console.log("entregando");
    //navigate(`/game/${params.id}`)

    const updatedComment = {
      id: params.id,
      name: nameValue,
      comment: commentValue,
      ratings: topping,
    };
    try {
      await axios.put(`${import.meta.env.VITE_API_BACKEND}/reviews?id=${params.id}/${commentId}`, updatedComment);
      console.log("tarea editada");
      //navigate("/")//temporalmente enviarlo a details
      //props.getReviews();
    } catch (error) {
      //console.log(error);
    }
    //console.log(newComment);
  };

  const deleteForm = () =>{
    axios.delete(`${import.meta.env.VITE_API_BACKEND}/reviews?id=${commentId}`)
    .then(()=>{

    })
    .catch((error)=>{
      console.log(error)
    })
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
            value={nameValue}
            onChange={(e)=>setNameValue(e.target.value)}
          />
        </div>

        <div>
          <label>Comments:</label>
          <textarea
            type="text"
            name="comments"
            value={commentValue}
            onChange={(e)=>setCommentValue(e.target.value)}
          />
        </div>

        <div>
          <label>Potatoes Rating:</label>
          <br />
          <input type="radio" name="1" onChange={(e)=>setTopping(e.target.value)}></input>
          <label htmlFor="1">1</label>
          <br />

          <input type="radio" name="1" onChange={(e)=>setTopping(e.target.value)}></input>
          <label htmlFor="1">2</label>
          <br />
          <input type="radio" name="1" onChange={(e)=>setTopping(e.target.value)}></input>
          <label htmlFor="1">3</label>
          <br />
          <input type="radio" name="1" onChange={(e)=>setTopping(e.target.value)}></input>
          <label htmlFor="1">4</label>
          <br />
          <input type="radio" name="1" onChange={(e)=>setTopping(e.target.value)}></input>
          <label htmlFor="1">5</label>
          <br />
        </div>

        <button type="submit">Are you sure?</button>
      </form>
    </div>
  );


}

export default EditReview