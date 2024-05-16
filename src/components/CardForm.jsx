import axios from 'axios';
import React, { useEffect, useState } from 'react'
import FormReview from './FormReview';
import { PacmanLoader } from 'react-spinners';
axios

function CardForm(props) {
const [comment, setComment]=useState(null)
useEffect(()=>{

axios.get(`${import.meta.env.VITE_API_BACKEND}/reviews`)
.then((response)=>{
    console.log(response.data);
    setComment(response.data)

}).catch((error)=>{
    console.log(error);
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
