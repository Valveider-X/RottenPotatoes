import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FormCompletion from "../components/FormCompletion"
import axios from 'axios'

function GameCompletion() {

  const params = useParams()
  console.log(params);
  const [completion, setCompletion] = useState(null)
  
  useEffect(()=>{
    getData()

  },[])

const getData=()=>{
  axios.get(`${import.meta.env.VITE_API_BACKEND}/completions`)

  .then((response)=>{
    console.log(response);
    
    
  })
  .catch((error)=>{
    console.log(error)
  })
}


  return (
    <div>GameCompletion
      <FormCompletion/>
    </div>
    
  )
}

export default GameCompletion