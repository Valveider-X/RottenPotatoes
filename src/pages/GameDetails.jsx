import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function GameDetails() {
  //const params = useParams()
  
  const [game, setGame] = useState(null)
  
  
  useEffect(()=>{
    getData()

  },[])

  const getData=()=>{
    axios.get(`${import.meta.env.VITE_API_URL}/games/:id)}?key=${import.meta.env.VITE_API_KEY}`)

    .then((response)=>{
      setGame(response.data.results)
      console.log(response.data.results)
      
    })
    .catch((error)=>{
      console.log(error)
    })
  }


  if (game === null){
    return <p>ESPERANDO RESPUESTA...</p>
  }


  return (
    <div>
      <p>GameDetails</p>
      
        {game.map((game, i)=>{
      <div key={i}className="game-card">
            <img src={game.background_image}
            style={{height: "100px"}}
            alt={"pito"}/>
            <h3>{game.name}</h3>
            <h4>{game.released}</h4>
            <h4>{game.rating}</h4>
            </div>
        })
      }
            
      

      
      </div>






    
    
  )
}

export default GameDetails