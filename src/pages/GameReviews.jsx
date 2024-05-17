import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'


function GameReviews() {

  const [reviewListValue, setReviewListValue] = useState([])

  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_BACKEND}/reviews`)
    .then((response)=>{
      setReviewListValue(response.data)
    })
    .catch((error)=>{
      Navigate("/error")
  
    })
  },[])

  return (
    <div className="review-list">
      {reviewListValue.map((eachReview, i)=>{
        return(
          <div key={i} className="card">
            
            
              <div className="review-card">
                <h3>{eachReview.name}</h3>
                <p className="review-p" style={{color: "white"}}>{eachReview.comment}</p>
                <p className="review-p" style={{color: "white"}}>{eachReview.ratings}</p>
              </div>


            
            </div>
        )
      })}

    </div>
  )
}


export default GameReviews



