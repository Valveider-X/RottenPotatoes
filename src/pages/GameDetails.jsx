import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function GameDetails(props) {
  const params = useParams()
  
  const [gameDetails, setGameDetails] = useState([])
  
  
  useEffect(()=>{
    getData()

  },[])

  const getData=()=>{
    axios.get(`${import.meta.env.VITE_API_URL}/games/${params.gameId}?key=${import.meta.env.VITE_API_KEY}`)
    .then((response)=>{
      setGameDetails(response.data.results)
      console.log(response.data.results)
      
    })
    .catch((error)=>{
      console.log(error)
    })
  }




  return (
    <div>
      <p>GameDetails</p>
      {
      <div className="game-card">
            <img src={props.game.background_image}
            style={{height: "100px"}}
            alt={"gameName"}/>
            <h3>{props.game.name}</h3>
            <h4>{props.game.released}</h4>
            <h4>{props.game.rating}</h4>
            </div>
      }
            
      

      
      </div>






    
    
  )
}

export default GameDetails