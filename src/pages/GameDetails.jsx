import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { PacmanLoader } from 'react-spinners'


function GameDetails() {
  const params = useParams()
  console.log(params);
  const [game, setGame] = useState(null)
  
  
  useEffect(()=>{
    getData()

  },[])

  const getData=()=>{
    axios.get(`${import.meta.env.VITE_API_URL}/games/${params.id}?key=${import.meta.env.VITE_API_KEY}`)

    .then((response)=>{
      console.log(response);
      setGame(response.data)
      console.log(response.data)
      
    })
    .catch((error)=>{
      console.log(error)
    })
  }


  if (game === null){
    return <PacmanLoader
    color={"yellow"}
    size={50}
    />
  }


  return (
    <div>
      <p>GameDetails</p>
      
        
      <div className="game-card">
            <img src={game.background_image}
            style={{height: "100px"}}
            alt={"pito"}/>
            <h3>{game.name}</h3>
            <hr/>
            <p>{game.description}</p>
            <hr/>
            <h4>{game.released}</h4>
            <h4>{game.rating}</h4>
            </div>
        
      
            
      

      
      </div>






    
    
  )
}

export default GameDetails