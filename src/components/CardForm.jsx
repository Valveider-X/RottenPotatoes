import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { PacmanLoader } from 'react-spinners';
import { Navigate } from 'react-router-dom';

function CardForm() {
const [comment, setComment]=useState(null)
useEffect(()=>{

axios.get(`${import.meta.env.VITE_API_BACKEND}/reviews`)
.then((response)=>{
    
    setComment(response.data)

}).catch((error)=>{
  navigate("/error")
})


},[])
if (comment === null){
    return <PacmanLoader
    class="pacman"
    color={"yellow"}
    size={50}
    />
  }
  return (
    <div className='cardFormClass'>
        <h3>{comment.name}</h3>
        <h4>{comment.comment}</h4>
        <h4>{comment.ratings}</h4>
        
    </div>
  )
}

export default CardForm
