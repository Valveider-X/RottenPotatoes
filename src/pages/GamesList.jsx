import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import GameDetails from './GameDetails'


function GamesList() {
  const [gamesList, setGamesList] = useState(null)
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}/games?key=${import.meta.env.VITE_API_KEY}`)
    .then((response)=>{
      //console.log(response)
      setGamesList(response.data.results)
    })
    .catch((error)=>{
      console.log(error)
    })

  },[])

  if (gamesList === null){
    return <p>ESPERANDO RESPUESTA...</p>
  }

  return (
    <div>GamesList
    {gamesList.map((game, i)=>{
      return(
        <div key={i}>
          <Link to={"/game/" + game.id}> 
          <div className="game-card">
            <img src={game.background_image}
            style={{height: "100px"}}
            alt={"gameName" + game.name}/>
            <h3>{game.name}</h3>
            <h4>{game.released}</h4>
            <h4>{game.rating}</h4>
            


          </div>
          

          </Link>

          

        </div>
      )
    })}






    </div>
  )
}

export default GamesList